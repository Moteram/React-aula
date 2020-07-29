import React from 'react';

import Filho from './filho';

function Pai(externo){

  return(
    <div>

    <Filho {...externo}><b>João</b></Filho>

    <Filho sobreNome={externo.sobreNome}>Maria</Filho>

    <Filho sobreNome="sales">Pedro</Filho>

    </div>

  );


}
export default Pai;