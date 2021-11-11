
import React from 'react';
import Card from "../UI/Card";
//import button from "../UI/button";

const Login = () => {
    return (
    <React.Fragment>
        <Card>
            <form>
                 <label> Usuario </label>
                 <input  type="email" placeholder="ejemplo@gmail.com"/> <br/>

                 <label>Contraseña</label>
                 <input type="password" pattern=".{6,}"/>  <br/>
                
               <button type="submit">Ingresar</button> <br/>
                
                 <p>
                     <button type="submit">Crear Cuenta</button>
                </p>

        </form>
        </Card>
        
    </React.Fragment>
    );
};
export default Login;

