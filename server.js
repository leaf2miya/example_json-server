const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// request dispatcher
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if(req.method === 'POST'){
    console.log(`request path: ${req.originalUrl}`)
    console.log("request body")
    console.dir(req.body)
    console.log("request params")
    console.dir(req.params)
    switch(req.path) {
      case "/json":
        // sample:
        //   - dispatch by request data
        //   - rewrite url
        req.method = "GET"
        if (req.body["to_error"] === "1") {
          req.url = "/dummy_resources/2"
        } else if (req.body["to_plain"] === "1"){
          req.url = "/dummy_resources/3"
        } else {
          req.url = "/dummy_resources/1"
        }
        break
    }
  }
  next()
})

server.use(router)
// edit response data
router.render = (req, res) => {
  if (res.locals.data.type && res.locals.data.type === "string"){
    // return text/plain
    res.send(res.locals.data.result)
  } else {
    res.send(res.locals.data)
  }
}

server.listen(3000, () => {
  console.log('JSON Server is running')
})
