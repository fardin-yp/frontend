const express = require('express')

const dev = process.env.NODE_ENV !== 'production'

const next = require('next')
const app = next( { dev } )
const handle = app.getRequestHandler()


app.prepare().then(() => {
   const server = express()

   server.use(express.json())

server.get('*', (req,res) => {
  return handle(req,res)
})

const PORT = process.env.PORT || 27017

server.listen(PORT ,() => console.log('server connected on 8080'))})