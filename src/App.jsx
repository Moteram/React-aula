import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import Comparametro from './components/basicos/Comparemetro';
import ComFilhos from './components/basicos/Comfilhos';
import Card from './components/layout/card';
import Repeticoa from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import Pai from '../src/components/comunicacao/direta/pai';
import SuperPai from '../src/components/comunicacao/indireta/superPai';
import Input from '../src/components/form/input';
import Contador from '../src/components/contador/contador';
import Mega from './components/mega/Mega';


function App(props){

  return(

    <div className="app">

      <h1>Fundamentos REACTJS</h1>

      <div className="cards">

        <Card titulo="#11 Mega senha números aliatorios" color="#73503C">
          
          <Mega qN={8}/>

        </Card>

      <Card titulo="#10 contador" color="#293E6A">

        <Contador passo={10} valor={100}/>

        </Card>

<Card titulo="#09 input" color="#9C0F5F">
<Input/>
</Card>


<Card titulo="#08 Comunicação Indireta" color="#000">

<SuperPai/>

</Card>

<Card titulo="#07 Comunicação direta" color="#008">

  <Pai sobreNome="master"/>

</Card>



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

<ComFilhos>
<ul>
<li>Ana</li>
<li>Bia</li>
<li>Carlos</li>
<li>Daniel</li>

</ul>

</ComFilhos>

</Card>


<Card titulo="#02 - Segundo componete" color="#92B06A">
conteudo
</Card>


<Card titulo="#01 - Primeiro Componete" color="#FF85CB">
<Primeiro />
</Card> 

        
      </div>

       

    </div>
  );

}

export default App;