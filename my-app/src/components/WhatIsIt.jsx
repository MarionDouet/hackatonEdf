import React from 'react';
import './WhatIsIt.css';

function WhatIsIt() {
  return (
    <div className="BG">
      <div className="App">
        <div className="container">
          <h1 className="bigtitle1">3x plus puissant que l'essence</h1>
          <p className="paragraph">Pour la même quantité d’énergie utilisée l’hydrogène développe jusqu’à 3
fois plus de puissance qu’un gasoil d’origine fossile.
</p>
        </div>
        <div className="container">
          <h1 className="bigtitle1">0% de CO2 rejetté</h1>
          <p className="paragraph">L'avantage fondamental de l'hydrogène est de ne pas polluer et d'être
productible de manière propre et simple par électrolyse de l'eau.
</p>
        </div>
        <div className="container">
          <h1 className="bigtitle1">Incolore et inodore</h1>
          <p className="paragraph1">Puissant mais seulement, l’hydrogène est reconnu grâce à sa
caractéristique incolore et inodore.

</p>
        </div>
      </div>
    </div>
  );
}

export default WhatIsIt;