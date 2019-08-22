    
const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Todos = mongoose.model('Todos',TodosSchema);

module.exports = Todos;