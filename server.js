const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
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
    res.send(dataBase.users);
} );

app.post('/signin', (req, res) => {
    if(req.body.email === dataBase.users[0].email && req.body.password === dataBase.users[0].password){
        res.json('success');
    } else {
        res.status(400).json('error logging in');
    }
})


app.post('/register', (req, res) => {
     const {email, name, password} = req.body;
     dataBase.users.push({
        id: '125',
        name: name,
        email: email,
        entries: 0,
        joined: new Date()
     })
     res.json(dataBase.users[dataBase.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    let found = false;
    dataBase.users.forEach( user => {
        if(user.id === id){
            found = true;
            return res.json(user);
        }
    })
    if(!found){
        res.status(400).json('not found');
    }
})

app.put('/image', (req, res) => {
    const {id} = req.body;
    let found = false;
    dataBase.users.forEach( user => {
        if(user.id === id){
            found = true;
            user.entries++
            return res.json(user.entries);
        }
    })
    if(!found){
        res.status(400).json('not found');
    }
})


app.listen(3000, ()=> {
    console.log('app is running on port 3000');
});