import React from 'react';

function Condicional(num){

  return(
    <div>
      <h2>O número é { num.numero}</h2>

      {num.numero % 2 === 0 ?

         <span>Par</span> : <span>Ímpar</span>

      }

      
      
    </div>


  );

}

export default Condicional;