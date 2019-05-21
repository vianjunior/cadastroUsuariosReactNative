import {db, criaTabelaClientes} from './criaTabelasBancoSQLite'

export function insereClientesERP(data){
    db.transaction(tx => {
        tx.executeSql('DROP TABLE CADCLIFOR')
        criaTabelaClientes()
        db.transaction(tx => {
            data.forEach(dado => {
                tx.executeSql(`
                    INSERT INTO
                        CADCLIFOR(
                            cdCliFor,
                            nmCliFor,
                            nmFantasia,
                            tpPessoa,
                            nuCpfCnpj
                        )
                    VALUES(?,?,?,?,?)
                `,
                [
                    dado.CDCLIFOR, dado.NMCLIFOR, dado.NMFANTASIA, dado.TPPESSOA, dado.NUCPFCNPJ
                ], (err, data) => {
                    
                })
            })
            console.log('Aqui: ', tx)
        })
    })
}

export function buscaClientesApp(){

    return new Promise(result => {
        db.transaction(tx => {
            tx.executeSql(`
                SELECT
                    *
                FROM
                    CADCLIFOR
            `, [], (err, data) =>{
                if(data.rows.length > 0){
                    result(data.rows._array)    
                } else {
                    result(false)
                }
            })
        })
    })
}