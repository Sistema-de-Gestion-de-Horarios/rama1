import { Tabs } from 'element-react'
import React from 'react'

import 'element-theme-default';
import TabDocentes from './components/TabDocentes';
import TabMateria from './GestionarMateria/TabMateria'

export default function Admin() {
    return (
        <div>
            <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                <Tabs.Pane label="Docentes" name="1"><TabDocentes/></Tabs.Pane>
                <Tabs.Pane label="Materia" name="2"><TabMateria/></Tabs.Pane>
                <Tabs.Pane label="Estudiantes" name="3">Materias</Tabs.Pane>  
                
            </Tabs>
            
        </div>
        
    )
}
