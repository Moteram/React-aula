import React from 'react';

function Filho(fromPai){

  return (

    <div>
      <p>{fromPai.children} - { fromPai.sobreNome }</p>
    </div>

  );

}
export default Filho;