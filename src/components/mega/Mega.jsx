import React, { useState } from 'react';

export default (num) => {

  const [numeros, setNumeros] = useState(Array(num.qN).fill(0));

  function geraNumerosNaoContidos(array){

    const max = 60;
    const min = 1;
    const novoNumeroGerado = parseInt(Math.random() * (max - min) + min);

    return array.includes(novoNumeroGerado) 
    ? geraNumerosNaoContidos(array) : novoNumeroGerado; 

  }


  function geraNumeros(){

    const novoArray = Array(num.qN)
    .fill(0)
    .reduce((a, e) =>{
      const novoNumero = geraNumerosNaoContidos(a)
      return [...a, novoNumero]}, [])
    .sort((a, b) => a - b);
    setNumeros(novoArray);

  }

  return(
    <div>
      <h3>Mega</h3>
      <h4>{numeros.join(' ')}</h4>
      <button onClick={geraNumeros}>Gerar Números</button>
   </div>
  );

}


