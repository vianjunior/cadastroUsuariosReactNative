import axios from 'axios'
import {Alert} from 'react-native'

import {insereClientesERP} from '../DAO/crudClientesERP'

export function buscaClientesERP(){
    axios.post('http://www.metasis.com.br/getcnpj.php', {cnpj:'06885154000195'})
    .then(resp=>{
        axios.get('http://' + resp.data.path + ':' + resp.data.portaServidor + '/buscaClientesERP')
        .then(resp =>{
            insereClientesERP(resp.data)
        })
        .catch(err=>{
            Alert.alert('Erro', 'Erro ao buscar clientes do ERP, em /buscaUsuariosAPP')
        })
    })
}