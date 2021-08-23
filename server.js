const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('this is working my friend');
} );

app.listen(3000);

/*

*/