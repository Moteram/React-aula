import React from 'react';


function Botoes(click){

  return(

    <div>
        <button onClick={click.clickMais}>+</button>
        <button onClick={click.clickMenos}>-</button>
      </div>

  );
}

export default Botoes;