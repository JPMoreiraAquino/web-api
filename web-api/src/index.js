import http from 'node:http'

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.end('Hello World')
}).listen(PORT, () => console.log(`serve is running at ${PORT}` )) 

export {
  server
}