const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./Back-end/Routes')

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({
        'success': true
    });
})

app.use('/api', api);

if (process.env.NODE_ENV === 'produção') {
    //Express vai entregar assets de produção   
    app.use(express.static('frontend/build'))

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'inde.html'))
    })
}

const PORT = process.env.PORT;
//var port = 8080;
console.log(PORT)
app.listen(8080)


//user : My-portfolio
//senha: 180279
//Url: mongodb+srv://My-portfolio:<password>@cluster0.5xwzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority