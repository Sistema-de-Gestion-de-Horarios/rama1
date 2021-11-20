import React, { Fragment } from 'react';
import Login from  "./Componentes/LOGINADMIN/Login";
import "./inicio.css";


import {
	BrowserRouter as Router,
	Switch,
	Route,

} from 'react-router-dom'
import Docente from './view/Docente';
import Admin from './view/Admin';
import Estudiante from './view/Estudiante';
import Pagina from './Pagina';
import Materia from './view/Admin/GestionarMateria/TabMateria/Materia';
import { useState } from 'react';
import TabDocentes from './view/Admin/components/TabDocentes';
import ListaDocente from './view/Admin/components/TabDocentes/ListaDocente';
import listaMateria from './view/Admin/GestionarMateria/TabMateria/listaMateria';

function App() {
	//const [isEstudianteIn, setEstudianteIn] = useState(false);
	const [isDocenteIn, setDocenteIn] = useState(false);
	//const [isAdministrativoIn, setAdministrativoIn] = useState(false);
	const [listDocente, setListDocentes] = useState([]);
	//const [isUpdateIn, setIsUpdateIn] = useState(false);
	const [isMateriaIn, setMateriaIn] = useState(false);
    const [listaMteria, setlistaMateria] = useState([]);
 
	const newDocenteHandler =(docenteName, cargaFloat) => {
			setListDocentes((prevListDocentes) => {
			  return [
				  ...prevListDocentes, 
				  {id: Math.trunc(Math.orden() * 100), docenteName, cargaFloat} 
			  ];
			});
		};

	const newMateriaHandler =(MateriaName, cargaFloat) => {
			setlistaMateria((prevlistaMateria) => {
			  return [
				  ...prevlistaMateria, 
				  {id: Math.trunc(Math.orden() * 100), MateriaName, cargaFloat} 
			  ];
			});
		};	
	
	//const storagedEstudianteInfo = localStorage.getItem("isEstudianteIn");
	//if (storagedEstudianteInfo === 1){
		//setEstudianteIn(true);
	//}

	//const estudianteHandler = () => {
		//console.log("Estudiante en---");
		//localStorage.setItem("isEstudianteIn", 1);
		//setEstudianteIn(true);
	//};


	const storagedDocententeInfo = localStorage.getItem("isDocenteIn");
	if (storagedDocententeInfo === 1){
		setDocenteIn(true);
	}
	const DocenteHandler = () => {
		console.log("Docente en---");
		localStorage.setItem("isDocenteIn", 1);
		setDocenteIn(true);	
	};	

	const MateriaHandler = () => {
		console.log("Docente en---");
		localStorage.setItem("isDocenteIn", 1);
		setMateriaIn(true);	
	};	


	//const storagedAdministrativoInfo = localStorage.getItem("isAdministrativoIn");
	//if (storagedAdministrativoInfo === 1){
	//	setAdministrativoIn(true);
	//}


	//const AdministradorHandler = () => {
		//console.log("Admin en---");
		//localStorage.setItem("isAdministrativon", 1);
		//setAdministrativoIn(true);
	//}
	
    return (
		<Router>
			<Switch>
			<Route exact path="/">
              {isDocenteIn ? ( 
            <Fragment>
                 <Docente  onNewDocente= {newDocenteHandler}/>
					  <ListaDocente docentes={listDocente}/>
			
                
            </Fragment> 


         ): ( 
            //<Pagina onDocente = {DocenteHandler}/>
            <Pagina onMateria = {MateriaHandler}/>
         )}  ;
				</Route>
				<Route exact path="/">
					
				</Route>
				<Route path="/admin">
					<Admin />
				</Route>
				<Route path="/docente">
					<Docente />
				</Route>
				<Route path="/estudiante">
					<Estudiante />
				</Route>
				
			</Switch>
		</Router>
			  
     )
 }
			


export default App;