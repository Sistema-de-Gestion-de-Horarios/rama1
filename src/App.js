import React, {Fragment} from 'react';
import Login from  "./Componentes/LOGINADMIN/Login";
import Nave from "./Componentes/Navigation/Nave";
import "./inicio.css";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

function App() {
    return (
    <Fragment >
	<Router>
		<Switch>
			<Route exact path="/">
				<Login />
			</Route>
		</Switch>
	</Router>       
</Fragment>
    
    ); 
}

export default App;