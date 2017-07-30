const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://dbadmin:dbadmin123@ds129153.mlab.com:29153/angular-team-project',
    port: 8080,
    statisticsUpdateInterval: 300000
  }
}
