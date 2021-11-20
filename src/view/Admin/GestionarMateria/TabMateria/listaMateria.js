import React from "react"; 

import "./index.css";
 

const listaMateria = (props) => {
    return (
        <div>
           {props.Materias.map((Mate) => {
              return( 
                <div key={Mate.id}>
                   <table>
                        <tbody>	
	                     	<tr>
                                <td> {Mate.id} </td>
                                <td> {Mate.DocenteName}</td>
                                <td> {Mate.MateriaName}</td>
                                <td> {Mate.cargaFloat}</td>
                                <td> 
                                    <i className="el-icon-edit"></i>
                                    <a href="{#}" onClick={()=>this.Mate.id}> {props.children}Editar</a>|
                                    <i className="el-icon-delete"></i> 
                                    <a href="{#}"onClick={props.onClick}> {props.children}Eliminar</a>|
                                    <a href="{#}" onClick={props.onClick}> {props.children}VerMateria</a>|

                                </td>    
                            
                           </tr>
                        
	                    </tbody>
            
                     </table>
                </div>
              );
         })}
        </div>
     );
}
export default listaMateria;