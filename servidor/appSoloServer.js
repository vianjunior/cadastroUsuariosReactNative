const express = require("express")
const bodyParser = require("body-parser")
const Firebird = require("node-firebird")

const app = express()
const porta = 12001

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}))
app.use(bodyParser.json({ limit: "50mb" }))

//configuração de conexão com DB Firebird
var options = {};
options.host = '10.1.1.154';
options.database = 'C:\\Users\\Public\\Bkp\\Bases de Clientes para Teste\\INDUSTRIAL\\Agro Gatti\\DB\\INDUSTRIAL.FDB';
options.user = 'sysmts';
options.password = 'mts';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;        // default when creating database
const pool = Firebird.pool(1000000, options); //configuração de número máximo de conexões simultâneas

//rota de teste GET
app.get('/testeGet1', (request, response)=>{
    response.send('Teste de rota GET 01')
})

//rota de teste POST
app.post('/testePost1', (request, response)=>{
    let parametros = request.body
    console.log(parametros.Nome, '-', parametros.Idade, '-', parametros.Cargo)
    response.send('Done!')
})

//rota GET à DB Firebird
app.get('/buscaUsuariosApp', (request, response)=>{
    Firebird.attach(options, (err, db)=>{
        if(err){
            throw console.log("Erro ao conectar com o banco de dados", err)
        }
        db.query(`
            SELECT
                *
            FROM
                SYNUSUARIO
        `, [], (err, result)=>{
            if(err) {
                console.log('Erro ao executar SELECT em /buscaUsuariosAPP', err)
                return //break
            } else {
                console.log('Done!')
                response.send(result)
            }
            db.detach()
        })
    })
})

app.get('/buscaClientesERP', (request, response) => {
    Firebird.attach(options, (err, db)=>{
        if(err){
            throw console.log("Erro ao conectar com o banco de dados", err)
        }
        db.query(`
            SELECT 
                *
            FROM
                CADCLIFOR
        `, [], (err, result)=>{
            if(err) {
                console.log('Erro ao executar SELECT em /buscaClientesERP', err)
                return
            } else {
                response.send(result)
            }
        })
    })
})

//---------------------------------------------------
app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})