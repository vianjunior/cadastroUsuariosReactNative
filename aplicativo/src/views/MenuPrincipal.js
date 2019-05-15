import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'

import Header from '../components/Header'
import { Card } from 'react-native-elements';

export default class MenuPrincipal extends React.Component{

    render(){
        return(
            <View>

                <Header
                    titulo = "Inicio"
                />
                
                <View>
                    <TouchableOpacity>
                        <Card>
                            <View>
                                <Text>Usuários Cadastrados pelo APP</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress= {()=> Actions.replace('listaRegistrosERP')}>
                        <Card>
                            <View>
                                <Text>Lista de Registros ERP</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Card>
                            <View>
                                <Text>Sincronizar Cadastros</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}