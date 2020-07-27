import React from 'react';

function Comfilhos(txt){

  return(
    <div>
      <h2>Os Filhos</h2>
      <div>
        {txt.children}
      </div>
    </div>
  );
}

export default Comfilhos;