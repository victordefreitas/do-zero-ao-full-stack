const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./Back-end/Routes')

app.use(bodyParser.json());


app.use('/api', api);

if (process.env.NODE_ENV === 'produção') {
    //Express vai entregar assets de produção   
    app.use(express.static('frontend/build'))

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT;
app.listen(PORT)


