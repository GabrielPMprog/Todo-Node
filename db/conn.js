const {Sequelize } = require('sequelize')

const sequelize = new Sequelize('novemvc', 'root', '' ,{

host:'localhost',
dialect:'mysql',

})

try {
    
sequelize.authenticate()
console.log('Conexão concluida com sucesso!')

} catch (error) {
    console.log('Não foi possível conectar!')
}

module.exports = sequelize