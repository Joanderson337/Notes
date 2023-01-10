const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUser')

async function migrationRun(){
  const schema = [
    createUsers
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schema))
  .catch(error => console.log('fude',error))
}

module.exports = migrationRun