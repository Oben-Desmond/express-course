const express = require(`express`)
const path = require(`path`)
const { readFileSync, writeFileSync, readFile } = require(`fs`)

var PdfReader = require('pdfreader').PdfReader;

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded())
// app.use(express.static(path.join(__dirname,`public`)))

// app.use(`/`,require(`./routes/home`))

app.listen(PORT, () => {
    console.log(`server started`)
})




function  callback(err){
   console.log(err)
}


const fileUpload = require(`express-fileupload`)

app.post(`/file`,fileUpload() , function (req, res){

    const sampleFile= req.files.book
    // console.log(sampleFile)
    readPdfFile(sampleFile.data)
    console.log( sampleFile)
    res.send(`file uploaded`)
    

})



function readPdfFile(pdfBuffer){
         // pdfBuffer contains the file content
         console.log(`extracting`)
        new PdfReader().parseBuffer(pdfBuffer, function(err, item){
         console.log(`done`)
          
            if (err)
               callback(err);
            else if (!item)
                callback();
             else if (item.text){
                // console.log(item.text);
                writeFileSync(`./pdf.txt`,item.text)
            }
              });
          
}