import React from 'react';
import './Footer.css';
import fha from '../images/Fha.jpeg'
import edf from '../images/EDF.jpg'
import occi from '../images/occi.jpg'
import imp from '../images/imp.jpg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.png'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="footer">
        <p className="partenaires">Restez informés et réagissez sur nos réseaux sociaux</p>
        <a href="https://facebook.com"><img className="logos" src={facebook} alt=""/></a>
        <a href="https://twitter.com"><img className="logos" src={twitter} alt=""/></a>
        
        <p className="partenaires">Nos partenaires</p>
        <a href="https://edf.fr"><img className="logos" src={edf} alt=""/></a>
        <a href="https://hidrogenoaragon.org/en/"><img className="logos" src={fha} alt=""/></a>
        <a href="https://www.agence-adocc.com"><img className="logos" src={occi} alt=""/></a>
        <a href="https://ondulia.com"><img className="logos" src={imp} alt=""/></a>
      </div>
    )
    }
}

export default Footer;
