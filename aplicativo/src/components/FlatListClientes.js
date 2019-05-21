import React from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'

import { formatarCampo } from '../functions/mascaraCpfCnpj'
import { Separator} from 'native-base';

export default props => {

    itensLista = ({ item }) => (

        <Collapse style={estilos.ssCollapseGeral}>
            <CollapseHeader style={estilos.ssCollapseHeader}>
                <Separator bordered style={estilos.ssSeparatorCollapse}>
                    <View style={estilos.ssViewnmCliFor}>
                        <Text numberOfLines={1} style={estilos.ssTextNmCliFor}>{item.nmCliFor}</Text>
                    </View>
                    <View style={estilos.ssSaldo}>
                        <Text>
                            R$ Saldo Aqui
                        </Text>
                    </View>
                </Separator>
            </CollapseHeader>

            <CollapseBody style = {estilos.ssCollapseBody}>

                <View style={estilos.ssViewPrincipalCollapseBody}>

                    <View style={estilos.ssViewConteudoCollapseBody}>

                        <View style={estilos.ssContentCollapseBody}>
                            <Text>Código Cliente: </Text>
                            <Text>{item.cdCliFor}</Text>
                        </View>

                        <View style={estilos.ssContentCollapseBody}>
                            {
                                item.tpPessoa.trim() == 'F'
                                    ?
                                    <Text>CPF: </Text>
                                    :
                                    item.tpPessoa.trim() == 'J'
                                        ?
                                        <Text>CNPJ: </Text>
                                        :
                                        <Text>CPF/CNPJ: </Text>
                            }
                            <Text>{formatarCampo(item.nuCpfCnpj)}</Text>
                        </View>

                    </View>

                    <View style={estilos.ssViewBotaoExtrato}>
                        <TouchableOpacity  style={estilos.ssBotaoExtrato}>
                            <Image
                                source = {require('../img/extratoFlex.png')}
                            />
                        </TouchableOpacity>   
                    </View>

                </View>

            </CollapseBody>
        </Collapse>

    )

    return (
        <View>
            <FlatList
                data={props.dados}
                renderItem={this.itensLista}
            />
        </View>
    )
}

const estilos = StyleSheet.create({

    ssCollapseGeral: { 
        marginBottom: 1
    },

    ssCollapseHeader: { 
        height: 51
    },

    ssCollapseBody: { 
        height: 59,
        flexDirection : 'row'
    },

    ssSeparatorCollapse : { 
        flexDirection: 'row'
    },

    ssViewnmCliFor : { 
        flex: 0.65
    },

    ssTextNmCliFor : { 
        width: 198 
    },

    ssSaldo: { 
        flex: 0.35 
    },

    ssViewPrincipalCollapseBody: { 
        flex: 1, 
        flexDirection: 'row' 
    },

    ssViewConteudoCollapseBody: {
        marginTop: 6, 
        flex: 0.70 
    },

    ssContentCollapseBody: { 
        flexDirection: 'row',
        marginLeft: 20
    },

    ssViewBotaoExtrato: { 
        flex: 0.30, 
    },

    ssBotaoExtrato: { 
        margin:5,
        marginLeft: 35,
        marginRight: 50, 
        flex:1,
    }
})