import React from 'react';
import './Footer.css';
import fha from '../images/Fha.jpeg'
import edf from '../images/EDF.jpg'
import occi from '../images/occi.jpg'
import imp from '../images/imp.jpg'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="footer">
        <p></p>
        <img className="logos" src={edf} alt=""/>
        <img className="logos" src={fha} alt=""/>
        <img className="logos" src={occi} alt=""/>
        <img className="logos" src={imp} alt=""/>
      </div>
    )
    }
}

export default Footer;
