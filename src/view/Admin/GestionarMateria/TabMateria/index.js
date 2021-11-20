import React from 'react'
import { useState } from 'react';
import Buscador from '../Buscador';
//import Docente from './Docente';
import "./index.css";
import listaMateria from './listaMateria';
import Materia from './Materia';


function TabMateria() {
   
   const [listMateria, setlistaMateria] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);
 

  const newMateriaHandler =(MateriaName, cargaFloat) => {
        setlistaMateria((prevlistaMateria) => {
          return [
             ...prevlistaMateria, 
             {id: Math.trunc(Math.random() * 100), MateriaName, cargaFloat} 
          ];
        });
     };
  
  
    

    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Materia onNewMateria= {newMateriaHandler}/>
          <listaMateria Materia={listaMateria}/>
        </div>
    );
};
export default TabMateria;