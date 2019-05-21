import React from 'react'
import {View, TouchableOpacity} from 'react-native'

import Header from '../components/Header'
import {buscaClientesApp} from '../DAO/crudClientesERP'
import FlatListClientes from '../components/FlatListClientes'

export default class ListaRegistrosERP extends React.Component{

    constructor(){
        super()
        this.state = {
            resultadoClientesAPP : []
        }
    }
    componentDidMount(){
        this.listaClientesERP()
    }

    async listaClientesERP(){
        let resultado = await buscaClientesApp()
        console.log('Resultado', resultado)
        this.setState({resultadoClientesAPP : resultado})
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Header
                    titulo= 'Lista ERP'
                    voltarPara= 'menuPrincipal'
                />
                <View style={{flex: 1}}>
                    <FlatListClientes
                        dados = {this.state.resultadoClientesAPP}
                    />
                    
                </View>
            </View>
        )
    }

}