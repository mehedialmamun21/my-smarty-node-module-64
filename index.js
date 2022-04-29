const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use (express.json());

app.get('/', (req,res) =>{
    res.send('Hello! from my smarty node app!! with auto restart.');
});

const users = [
    {id:1, name:'Manna', email:'manna@gmail.com', phone:'01712934565'},
    {id:2, name:'Rubel', email:'rubel@gmail.com', phone:'01712934565'},
    {id:3, name:'Amit', email:'amit@gmail.com', phone:'01712934565'},
    {id:4, name:'Riyaj', email:'riyaj@gmail.com', phone:'01712934565'},
    {id:5, name:'Bapparaz', email:'bapparaz@gmail.com', phone:'01712934565'},
    {id:6, name:'Jashim', email:'jashim@gmail.com', phone:'01712934565'}

]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }else{
        res.send(users);
    }
    
});

app.get('/user/:id',(req, res) => {
    // console.log(req.params);

    // const id = req.params.id;
    const id = parseInt(req.params.id);


    // const user = users[id];
    // const user = users.find(u => u.id == id);
    const user = users.find(u => u.id === id);
    res.send(user);

});

app.post ('/user', (req,res) => {
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length+1;
    users.push(user);

    res.send(user);
})

app.get('/fruits', (req,res) => {
    res.send(['mango', 'apple', 'banana', 'oranges']);
});

app.get ('/fruits/mango/fazli', (req,res) => {
    res.send ('fazli flavor are sour!');
})

app.listen(port,() =>{
    console.log('Listening to Port -', port);
})