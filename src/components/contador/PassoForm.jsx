import React from 'react';

function PassoForm(pass){

  return(
    <div>        
         <label htmlFor="passInput">passo:  </label>
         <input id="passInput" type="number" value={pass.passo} 
        onChange={e => pass.onPassoChange(+e.target.value)}/>

    </div>
  );
}
export default PassoForm