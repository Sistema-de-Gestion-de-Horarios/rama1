import React from 'react';
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
import { useState } from 'react';


function App() {
	const [isEstudianteIn, setEstudianteIn] = useState(false);
	const [isDocenteIn, setDocenteIn] = useState(false);
	const [isAdministrativoIn, setAdministrativoIn] = useState(false);
	
	const storagedEstudianteInfo = localStorage.getItem("isEstudianteIn");
	if (storagedEstudianteInfo === 1){
		setEstudianteIn(true);
	}

	const estudianteHandler = (RU, password) => {
		console.log("Estudiante en---");
		localStorage.setItem("isEstudianteIn", 1);
		setEstudianteIn(true);
	};


	const storagedDocententeInfo = localStorage.getItem("isDocenteIn");
	if (storagedDocententeInfo === 1){
		setDocenteIn(true);
	}
	const DocenteHandler = (CI, password) => {
		console.log("Docente en---");
		localStorage.setItem("isDocenteIn", 1);
		setDocenteIn(true);	
	};	


	const storagedAdministrativoInfo = localStorage.getItem("isAdministrativoIn");
	if (storagedAdministrativoInfo === 1){
		setAdministrativoIn(true);
	}


	const AdministradorHandler = (CI, password) => {
		console.log("Admin en---");
		localStorage.setItem("isAdministrativon", 1);
		setAdministrativoIn(true);
	}
	
		

		
    return (
		<Router>
			<Switch>
			<Route exact path="/">
					<Pagina />
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