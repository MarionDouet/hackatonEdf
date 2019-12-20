import React from 'react';
import './environnement.css'

class Environnement extends React.Component {

  render() {
    return (
      <div className="introContainer">
        <div className="sousContainer">
          <h5 className="left">1kg = 100 km autonomie </h5>
          <h5 className="right">5 minutes = 1 café + 1 plein</h5>
        </div>
        <h1>"En 2020, l'hydrogène avance et vous ?"</h1>
        <h5>5 fruits et légumes par jour</h5>
      </div>
    )
  }
}

export default Environnement;