const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var data = {
        'name' : 'bala advaith'
    };
    res.render('index', data);
});

app.listen(3000, () => {
    console.log("App started..");
});
