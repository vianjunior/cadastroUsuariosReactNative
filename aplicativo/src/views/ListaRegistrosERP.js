import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Input} from 'react-native-elements'

import IconIO from 'react-native-vector-icons/Ionicons'

import Header from '../components/Header'

export default class ListaRegistrosERP extends React.Component{

    constructor(){
        super()
        this.state = {
            textoPesquisaUsuario: ''
        }
    }

    render(){
        return(
            <View>
                <Header
                    titulo= 'Lista ERP'
                    voltarPara= 'menuPrincipal'
                />
                <View>
                    
                </View>
            </View>
        )
    }

}