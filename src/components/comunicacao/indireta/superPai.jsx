import React, { useState }from 'react';

import SubFilho from './subFilho';

//Arrow function para mudar o estado
export default (props) =>{

const [num, setNum] = useState(0);
const [texto, setTxt] = useState('Valor');

function quandoclicar(valoerGerado, texto){

  setNum(valoerGerado);
  setTxt(texto);

}
return(
<div>

<h4>{texto}: {num}</h4>
<SubFilho clicador={quandoclicar}></SubFilho>

</div>
);

}