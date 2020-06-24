import app from './app'

const port = Number(process.env.PORT) || 3000

const server = app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

function close () {
  console.log('shutting down server')
  server.close().then(() => {
    process.exit(0)
  })
}

process.on('SIGINT', close)
process.on('SIGTERM', close)
