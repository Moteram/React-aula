import './card.css';
import React from 'react';

function Card(props) {

  return(
    <div className="card">
      <div className="conteudo">
        {props.children}
      </div>
      <div className="footer"> 
       {props.titulo}
      </div>

    </div>
  );

}

export default Card;