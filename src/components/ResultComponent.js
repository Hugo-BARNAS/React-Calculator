
//IMPORTATION DE REACT
import React from 'react';

//IMPORTATION DU COMPONENT
import {Component} from 'react';

//LA CLASSE RESULTCOMPONENT EST UNE CLASSE DE COMPONENT
class ResultComponent extends Component {
//METHODE RENDER QUI RENVOIE À UNE DESCRIPTION DE CE QU'ON VA VOIR
  render() {
    // result est une props
    let {result} = this.props;
    return ( 
      //CLASSNAME EST L'ATTRIBUT POUR SPECIFIER UNE CLASSE CSS
        <div className ="result"> 
        {/* expression jsx */}
          <p>{result}</p>
        </div>
    )
  }
}

export default ResultComponent;