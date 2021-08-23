const express = require('express');

const app = express();
app.listen(3000);

const dataBase = {
    users:[
        {
            id: '123',
            name: 'Steven',
            email: 'steven@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sallyn@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}
   

app.get('/', (req, res) =>{
    res.send('this is working my friend');
} );

app.post('/signing', (req, res) => {
    res.json('PLEASE SIGN IN MY FRIEND');
})



/*

*/