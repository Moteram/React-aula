import './style.css';
import React from 'react';




function SubFilho(props){

  return(
    <div>
      <button className="hand" onClick={() => {props.clicador(Math.random(), 'Gerado')}}>Alterar</button>
    </div>
  );

}
export default SubFilho;
