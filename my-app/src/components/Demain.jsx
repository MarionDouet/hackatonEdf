import React from 'react';
import './Demain.css';

class Demain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="demain">
          <h2 className="titleDemain">Une énergie locale</h2>
          <p className="txt1">Réduisant l'impact carbonne au niveau mondial</p>
          <p className="txt2">Créatrice d'emploi</p>
          <p className="txt3">Futur Fuels</p>
        </div>
        <div>
          <button className="buttonDemain">What next</button>
        </div>
      </div>
      
    )
    }
}

export default Demain;
