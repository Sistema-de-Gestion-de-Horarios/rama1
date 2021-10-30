import React from 'react';
import Login from  "./Componentes/LOGINADMIN/Login";
import "./inicio.css";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import Docente from './view/Docente';
import Admin from './view/Admin';
import Estudiante from './view/Estudiante';

function App() {
    return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Login />
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
    ); 
}

export default App;