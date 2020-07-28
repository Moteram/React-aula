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
      <Card titulo="#06 com parametros" color="#008">

        <Comparametro Titulo="teste" subtitulo="testado"/>

      </Card>

    <Card titulo="#05 - Componente com condicional v1" color="#FA6900">

    <Condicional numero={ 22 }/>

    </Card>

    <Card titulo="#04 - Componente com Repetição" color="#008BBA">

      <Repeticoa/>

    </Card>

    <Card titulo="#03 - Componente com filhos" color="#E94C6F">

    <Com_Filhos>
      <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Carlos</li>
        <li>Daniel</li>

      </ul>

    </Com_Filhos>

    </Card>


    <Card titulo="#02 - Segundo componete" color="#92B06A">
      conteudo
    </Card>


    <Card titulo="#01 - Primeiro Componete" color="#FF85CB">
    <Primeiro />
    </Card>  

    </div>
  );

}

export default App;