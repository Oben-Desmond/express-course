var path = require('path')
var filePath = path.join(__dirname, 'APPLICATION.pdf')
var extract = require('pdf-text-extract')


function extractText(){
    extract(filePath, function (err, pages) {
        if (err) {
          console.dir(err)
          return
        }
        console.dir(pages)
      })
}

module.exports=extractText