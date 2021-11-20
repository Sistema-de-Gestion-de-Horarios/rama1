import React, { useState } from 'react';
import Materia from './Materia';
export const ActualizarMateria = () => {
   
   const [listaMateria, setlistaMateria] = useState([]);
   const [isUpdateIn, setIsUpdateIn] = useState(false); 

   const newMateriaHandler =(MateriaName, cargaFloat) => {
       setlistaMateria((prevlistaMateria) => {
        return [
           ...prevlistaMateria, 
           {id: Math.trunc(this.MateriaName,this.cargaFloat)} 
        ];
      });
   };
   const storedUpdateInfo = localStorage.getItem("isUpdateIn");
   if (storedUpdateInfo === 1){
      setIsUpdateIn(true);
   }

   const MateriaHandler = (email, password) => {
      console.log("Loging in...")
      localStorage.GetItem("isUpdateIn", 1);
      setIsLoggedIn(true);
   };
   const logoutHandler = () => {
      console.log("logout..");
      console.log(isLoggedIn);
      localStorage.removeItem("isUpdateIn");
      setIsLoggedIn(false);
   }



   return (
      <div>{props.children}
         {props.Materias.map((Mate) => {
            return( 
               <div key={Mate.id}>

                  <form onSubmit={handlerSubmit}>
                     <label>Materia</label>
                     <input type="text" value={this.Mate.MateriaName}/>
             
                     <label>Carga Horaria</label>
                     <input type="password" value={this.Mate.cargaFloat}/>
                     <button onClick={props.onClick}> {this.props.children}Editar</button>
                 </form>  
               </div>  
            );
         })};   

      </div>
   );
};