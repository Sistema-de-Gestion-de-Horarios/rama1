import React from 'react'
import { useState } from 'react';
import Buscador from '../Buscador';
import Horarios from './Horarios';
import "./index.css";

import ListaHorario from './ListaHorario';


function TabHorarios() {
   
   const [listAmbiente, setListHorario] = useState([]);
   const [isUpdateIn, setIsUpdateIn] = useState(false);
 

  const newHorariosHandler =(horariosName, piso, estado) => {
        setListHorario((prevListHorario) => {
          return [
             ...prevListAmbientes, 
             {id: Math.trunc(Math.random() * 100), ambienteName, piso, estado} 
          ];
        });
     };

    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Horarios  onNewAmbiente= {newAmbienteHandler}/>
          <ListaAmbiente Horarios={listaHorario}/>
        </div>
    )
}
export default TabHorarios;