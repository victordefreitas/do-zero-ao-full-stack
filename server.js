const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./App/Routes')

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({
        'success': true
    });
})

app.use('/api', api);

const PORT = process.env.PORT;
//var port = 8080;
console.log(PORT)
app.listen(8080)


//user : My-portfolio
//senha: 180279
//Url: mongodb+srv://My-portfolio:<password>@cluster0.5xwzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority