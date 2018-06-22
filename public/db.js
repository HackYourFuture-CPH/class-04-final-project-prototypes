const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('SH01_json.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

console.log("connected")
/* const data=JSON.parse("SH01_json.json")
console.log(data) */