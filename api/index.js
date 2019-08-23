const express = require('express');
//const mongoose = require('mongoose');
//const Todos = require('./src/models/Todos');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// it's mongo insted localhost 
// becase mongo is the name of container
// mongoose.connect(
//     'mongodb://mongo:27017/docker-node-mongo',
//     { useNewUrlParser : true },
//     () => console.log('Mongoose connect sucessfull')
// )

app.get('/', async (req,res) => {
    res.send('Container online  9!');
})

// app.get('/todos', async (req,res) => {
//     try{
//         const todos = await Todos.find();
//         res.status(200).json(todos);
//     }catch(err){
//         res.status(404).json(err);
//     }
// })

// app.post('/todos', async (req,res) => {
//     try{
//         const { body } = req;
//         console.log(body);
//         const createdTodo = await Todos.create(body);
//         res.status(200).json(createdTodo);
//     }catch(err){
//         res.status(404).json(err);
//     }
// });

app.listen(PORT, HOST);