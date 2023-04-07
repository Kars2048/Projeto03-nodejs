const app = require('./app');

require('dotenv').config({path: 'variables.env'})

console.log("Eu me chamo "+process.env.NOME+" tenho "+process.env.IDADE+" e sou a universal")

//app.set('port', 3000);
app.set('port', process.env.PORT)
const server = app.listen(app.get('port'), () =>{
    console.log("Servidor rodando na porta; " +server.address().port);
})
