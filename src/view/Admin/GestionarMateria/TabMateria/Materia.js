import React, { useState } from 'react'
const Materia = (props) => {
    
    const [DocenteName, setDocenteName] = useState("")
    const [MateriaName, setMateriaName] = useState("");
    const [cargaFloat, setCargaFloat] = useState("");
    const [showSummary, setShowSummary] = useState("");

    const DocenteNameHandler = (event) => {
        console.log(event.target.value);
        setDocenteName(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const MateriaNameHandler = (event) => {
        console.log(event.target.value);
        setMateriaName(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const cargaFloatHandler = (event) => {
        setCargaFloat(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewMateria(MateriaName, cargaFloat);
        setMateriaName("");
        setCargaFloat("");

    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                 <label> Nombre del Docente</label>
                 <input type="text" onChange={DocenteNameHandler} value={DocenteName} />&nbsp; &nbsp; &nbsp; &nbsp;
                 <label> Nombre de Materia </label>
                 <input type="text" onChange={MateriaNameHandler} value={MateriaName} />&nbsp; &nbsp; &nbsp; &nbsp;   
                 <label> Carga Horaria </label>
                 <input type="number" onChange={cargaFloatHandler} value={cargaFloat}/>&nbsp; &nbsp; &nbsp; 
                  <button onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>
             <table>
                <thead>
                           <tr>
                               <th>Nombre del Docente</th>
                               <th>Nombre de la Materia</th>
			                   <th>Cargas Horarias</th>
			                   <th> Operaciones </th>
			        
		                    </tr>
	                    </thead>
        
                     </table>
         
           
           
    </div>
        
    );
};
export default Materia;
