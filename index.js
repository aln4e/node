let http = require('http')
let fs = require('fs')
let server = http.createServer(function(request, response){
  console.log(request.url)
  let url = request.url.slice(1,request.url.length) // => "/homepage.css" =>"homepage.css"


  if(url === ""){
    url = "homepage.html"
  }


  fs.readFile(url, function (err, data){
    if(err){
      console.log('Unable to read file.')
      alert("404 Error")
    }else{
      response.writeHead(200,{'Content-Type': 'text/html'})
      response.end(data)
    }
  })

})

  server.listen(3000, '127.0.0.1', function(){
    console.log('HTTP Server Started')
  })
