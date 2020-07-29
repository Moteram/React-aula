import './contador.css';
import React, {Component} from 'react';

import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

class Contador extends Component{

 
    state= {
      passo: this.props.passo || 1,
      valor: this.props.valor || 0,
    }

     inc = () => {

      this.setState({

        valor: this.state.valor + this.state.passo        

      });
         
    };

     dec = () => {

      this.setState({

        valor: this.state.valor - this.state.passo
      })

    };

    mudarPasso = (novoPasso) => {

      this.setState({

        passo: novoPasso

      });

    }



  
  render(){
    return(
      <div className="contador">
      <h2>contador</h2>

      <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}/>
       
              <Display valor={this.state.valor}/>  

              <Botoes clickMais={this.inc} clickMenos={this.dec}/>

      </div>
    );



  }


}
export default Contador;