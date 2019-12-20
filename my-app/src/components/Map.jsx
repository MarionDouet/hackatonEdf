import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"
import data from './Data';

const myIcon = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/51/4/1576789897-gas-station.png',
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

  render() {
    const position = [this.state.lat, this.state.lng];
    const isUserLocation = this.state.haveUsersLocation;
    return (
      <div className="mapContainer">
        <h1>la map</h1>
        <Map center={position} zoom={this.state.zoom} className="map">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.station.map(i => {
            return (
              <Marker position={[i.coordinates[1], i.coordinates[0]]} icon={myIcon}>
                <Popup>
                  <div className="popup">
                    <h3>{i.name}</h3>
                    <h5>{i.open}</h5>
                    <h5>{i.access}</h5>
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
      </div>
    )
  }
}

export default MapTest;