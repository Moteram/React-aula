import React from 'react';

import Filho from './filho';

function Pai(){

  return(
    <div>

    <Filho sobreNome="Moreira" />
    <Filho sobreNome="Moreira" />
    <Filho sobreNome="Moreira" />

    </div>

  );


}
export default Pai;