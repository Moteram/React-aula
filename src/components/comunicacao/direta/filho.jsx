import React from 'react';

function Filho(fromPai){

  return (

    <div>
      <h3>Componente filho</h3>
      <h4>{fromPai.children} - { fromPai.sobreNome }</h4>
    </div>

  );

}
export default Filho;