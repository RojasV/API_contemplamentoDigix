/* Bibliotecas */

const express = require('express')
const bodyParser = require('body-parser')



const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


require('./controllers/contempladorController')(app)


app.listen(3001, () => {
    console.log('bem-vindo ao sistema de contemplamento de familias para habitação')
})