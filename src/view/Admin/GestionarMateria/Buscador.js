import React from 'react';
import { Button } from 'element-react';
import listaMateria from './TabMateria/listaMateria';
import Materia from './TabMateria/Materia';
function Buscador() {


return(

   <div>
       <input type="text" value="" placeholder="buscar...."/> &nbsp;         
      <Button type="primary"icon="search">Buscar</Button>
 </div>
)   
}
export default Buscador;