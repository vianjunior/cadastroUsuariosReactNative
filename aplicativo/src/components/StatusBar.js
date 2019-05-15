import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'

export default props=>(
    <View style = {estilos.statusBarAndroid}/>
)

const estilos = StyleSheet.create({
    statusBarAndroid: {
        backgroundColor: '#273c75',
        height: 25,
        width: '100%'
    },

    statusBarIOs: {
        backgroundColor: '#FFF',
        height: 25,
        width: '100%'
    }
})