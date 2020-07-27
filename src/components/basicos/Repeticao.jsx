import React from 'react';

import listaProdutos from '../../Data/produtos';


function Repeticao(){

  return (
  <div>
    <h2>Repetição</h2>
  <ul> { listaProdutos.map(lst => {

      return <li key={lst.id}> 
                   { lst.id } -
                   {lst.nome} - R$ 
                   {lst.preco}
               </li>
  
  }) }
  
  </ul></div>);
 
}


export default Repeticao;