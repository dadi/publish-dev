const path = require('path')
const app = require('./publish-source')

app.run({
  configPath: path.join(__dirname, 'config')
})