const http= require(`http`)


const server= http.createServer((req,res)=>{
     res.write(`welcome to our home page`) 
     res.write(req.url)  
     res.end()
})


server.listen(5000)