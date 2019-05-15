import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import IconeIO from 'react-native-vector-icons/Ionicons'

export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

            <View style={estilos.viewPrincipal}>

                <View style={estilos.viewArrowBack}>
                    {
                        this.props.voltarPara
                            ?                      
                            <TouchableOpacity 
                                style={estilos.toucheableArrowBack} 
                                onPress={() => Actions.replace(this.props.voltarPara)
                            }>
                                <IconeIO name='md-arrow-dropleft' size={37} color='#fff' />
                            </TouchableOpacity>
                            :
                            null
                    }
                </View>

                <View style={estilos.viewTitulo}>
                    <Text style={estilos.fonteTitulo}>
                        {this.props.titulo}
                    </Text>
                </View>

                <View style={estilos.viewIcones}>
                </View>
                

            </View>
        )
    }

}

const estilos = StyleSheet.create({
    viewPrincipal: {
        backgroundColor: '#273c75',
        flexDirection: 'row',
        width: '100%',
        height: 55
    },

    viewArrowBack: {
        //backgroundColor: '#2ecc71', 
        flexDirection:'row',      
        alignItems: 'center',
        flex: 0.25
    },

    viewTitulo: {
        //backgroundColor: '#e67e22',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5
    },

    viewIcones: {
        //backgroundColor: '#FFF',
        flex: 0.25
    },

    fonteTitulo: {
        color: '#FFF',
        fontSize: 20,
    },

    toucheableArrowBack: {
        marginLeft: 18, 
        padding: 12
    }

})