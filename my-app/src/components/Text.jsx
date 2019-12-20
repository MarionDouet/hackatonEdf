import React from 'react';
import './HomePage.css';

function Text(props) {
  return (
    <div className="App">
      <h3 className="title1">{(props.activeFr) ? '5 min =' : '5 minutos ='}<span>{(props.activeFr) ? ' 1 plein + 1 café' : ' un completo + un cafe '} </span></h3>
      <h1 className="bigtitle">"En 2020,</h1> 
      <h1 className="bigtitle">{(props.activeFr) ? "l'" : 'El '}<span>{(props.activeFr) ? 'Hydrogène' : 'hidrógen'}</span></h1>
      <h1 className="bigtitle">{(props.activeFr) ? 'avance et vous ?' : 'avanza y tú?"'}</h1>
      <h3 className="title2">1kg = <span>100km</span></h3>
    </div>
  );
}

export default Text;

