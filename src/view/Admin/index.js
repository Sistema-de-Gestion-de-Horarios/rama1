import { Tabs } from 'element-react'
import React from 'react'

import 'element-theme-default';
import TabDocentes from './components/TabDocentes';

export default function Admin() {
    return (
        <div>
            <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                <Tabs.Pane label="Docentes" name="1"><TabDocentes/></Tabs.Pane>
                <Tabs.Pane label="Materias" name="2">Materias</Tabs.Pane>
                <Tabs.Pane label="Estudiantes" name="3">Materias</Tabs.Pane>
            </Tabs>
        </div>
    )
}
