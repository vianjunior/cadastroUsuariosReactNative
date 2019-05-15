import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import MenuPrincipal from './views/MenuPrincipal'
import ListaRegistrosERP from './views/ListaRegistrosERP'

export default ()=>(
    <Router>
        <Stack hideNavBar = {true}>
            <Scene key= 'menuPrincipal' component= {MenuPrincipal} initial/>
            <Scene key= 'listaRegistrosERP' component= {ListaRegistrosERP} />
        </Stack>
    </Router>
)