import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import Comparametro from './components/basicos/Comparemetro';
import Com_Filhos from './components/basicos/Comfilhos';
import Card from './components/layout/card';
import Repeticoa from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';

function App(props){

  return(

    <div className="app">

    <Card titulo="#05 - Componente com condicional v1">

    <Condicional numero={ 22 }/>

    </Card>

    <Card titulo="#04 - Componente com Repetição">

      <Repeticoa/>

    </Card>

    <Card titulo="#03 - Componente com filhos">

    <Com_Filhos>
      <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Carlos</li>
        <li>Daniel</li>

      </ul>

    </Com_Filhos>

    </Card>


    <Card titulo="#02 - Segundo componete">
      conteudo
    </Card>


    <Card titulo="#01 - Primeiro Componete">
    <Primeiro />
    </Card>  

    </div>
  );

}

export default App;