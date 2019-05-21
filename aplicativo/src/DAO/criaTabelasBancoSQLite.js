import {SQLite} from 'expo'

const db = SQLite.openDatabase('bancoAppSQLite')

export function criaTabelaClientes(){
    db.transaction(tx => {
        tx.executeSql(
            `
            CREATE TABLE IF NOT EXISTS
                cadCliFor(
                    cdCliFor INTEGER,
                    nmCliFor TEXT,
                    nmFantasia TEXT,
                    tpPessoa TEXT,
                    nuCpfCnpj TEXT
                )`
            )
        console.log('Done!', tx)
    })
}

export {db}