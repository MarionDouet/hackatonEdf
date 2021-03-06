import React from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"
import data from './Data';
import logoOuv from '../images/Logo-station-ouverte.png';
import logoFerm from '../images/Logo-station-fermée.png';
import logoPos from '../images/iconPosition.png';

const logoOpen = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/51/5/1576836612-logo-station-ouverte.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

const logoClose = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/51/5/1576833102-logo-station-fermee.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

const iconPosition = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/51/5/1576829557-iconposition.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

class MapTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 43.6047,
      lng: 1.4442,
      zoom: 6,
      haveUserLocation: false
    };
    this.askGeolocation = this.askGeolocation.bind(this);
  }

  componentDidMount() {
    this.askGeolocation();
  }

  askGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUsersLocation: true,
        zoom: 13
      });
    });
  }

  render(props) {
    const position = [this.state.lat, this.state.lng];
    const isUserLocation = this.state.haveUsersLocation;
    return (
      <div className="pageContainer">
        <div className="paragraphContainer">
          <div className="paragraphe">
            <h3>Stockable</h3>
            <p className="phrase">Les avancées technologiques ont rendu possible le stockage de l’hydrogène permettant ainsi une commercialisation sans perte d’énergie. </p>
          </div>
          <div className="paragraphe">
            <h3>Fiable</h3>
            <p className="phrase">Les recherches développées au cours des dernières années ont permis de stabiliser les réactions chimiques inhérentes à l’hydrogène et rendent plus sûre son utilisation. </p>
          </div>
          <div className="paragraphe">
            <h3>Disponible</h3>
            <p className="phrase">Grâce au projet H2piyR, l’hydrogène est une technologie disponible dans votre quotidien avec un réseaux de dix stations entre la France, l’Andorre et l’Espagne. </p>
          </div>
        </div>
        <h3 className="titreMap">Retrouvez nos stations ici</h3>
        <div className="mapContainer">

          <Map center={position} zoom={this.state.zoom} className="map">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.station.map(i => {
              return (
                <Marker position={[i.coordinates[1], i.coordinates[0]]} icon={(i.open === 'Ouverte') ? logoOpen : logoClose}>
                  <Popup>
                    <div className="popup">
                      <h4>{i.name}</h4>
                      <h6 className={(i.open === 'Ouverte') ? 'openColor' : 'closeColor'}>{i.open}</h6>
                      <h6>{i.access}</h6>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
            {isUserLocation ? (
              <Marker position={position} icon={iconPosition}>
                <Popup>Vous êtes ici.</Popup>
              </Marker>
            ) : (
                ''
              )}
          </Map>
          <div className="cardLegend">
            <Card>
              <CardHeader>Légende</CardHeader>
              <CardBody>
                <div className='legendAlign'>
                  <img src={logoOuv} className="legendLogo" />
                  <p className="legendText">Station ouverte</p>
                </div>
                <div className='legendAlign'>
                  <img src={logoFerm} className="legendLogo" />
                  <p className="legendText">Station fermée</p>
                </div>
                <div className='legendAlign'>
                  <img src={logoPos} className="legendLogo" />
                  <p className="legendText">Votre position</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default MapTest;