const app = require('express')();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/',(req, res) =>{
    res.send('Ok');
})

module.exports = app;