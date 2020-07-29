import React, { useState } from 'react';

function Input(){

  const [nome, auteraNome] = useState();

return(
  <>
  <h3>{ nome }</h3>
  <input type="text" value={ nome } onChange={e =>auteraNome(e.target.value)}/>

  </>

);
};

export default Input;