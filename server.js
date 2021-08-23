const express = require('express');
const app = express();
app.listen(3000);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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
    if(req.body.email === dataBase.users[0].email && req.body.password === dataBase.users[0].password){
        res.json('success');
    } else {
        res.status(400).json('error logging in');
    }
})
