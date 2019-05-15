import React from 'react'
import {View} from 'react-native'

import Header from '../components/Header'

export default class ListaRegistrosERP extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <View>
                <Header
                    titulo= 'Lista ERP'
                    voltarPara= 'menuPrincipal'
                />
            </View>
        )
    }

}