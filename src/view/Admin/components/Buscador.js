import React from 'react'
import { Button } from 'element-react'
import ListaDocente from './TabDocentes/ListaDocente';
import Docente from './TabDocentes/Docente';
function Buscador() {


return(

   <div>
       <input type="text" value="" placeholder="buscar...."/> &nbsp;         
      <Button type="primary"icon="search">Buscar</Button>
 </div>
)   
}
export default Buscador;