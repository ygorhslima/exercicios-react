var carros = `[
    {
        "id":1, 
        "marca":"Honda",
        "modelo":"Golf"
    },
    {
        "id":2, 
        "marca":"Fiat",
        "modelo":"Uno"
    },
    {
        "id":3, 
        "marca":"Chevrolet",
        "modelo":"Onix"
    },
    {
        "id":4, 
        "marca":"Toyota",
        "modelo":"Corolla"
    }
]`


var http = require("http")

const port = process.env.PORT || 3000; // Usa a variável de ambiente PORT ou 3000 por padrão

var server = http.createServer((request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.writeHead(200, {'content-Type':"text/html"})
    response.write(carros)
    response.end()
})
server.listen(3000, ()=>{
    console.log(`servidor aberto na porta ${port}`)
})