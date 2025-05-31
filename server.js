const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = 3200;

app.use(express.json())
app.use(morgan('dev'))

// Set up mongoose and schema
const mongoURI = process.env.MONGO_URI; // URI for local Mongo (DB name "todoapp")
mongoose.connect(mongoURI)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Mongo connection error:", err));

// Define the schema
const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Todo is a model we can use to interact with the "todos" collection in Mongo (Mongoose pluralizes the database names by default)
const Todo = mongoose.model('Todo', TodoSchema); // 'Todo' becomes "todos" in Mongo

const testData = [{id:1, title:"Sample Task", done:false}, {id:2, title:"Sample Task 2", done:true}]

app.route('/api/todos')
    .get(async (req, res) => {
        const todos = await Todo.find(); 
        res.json(todos); // Return all todos
    })
    .post(async (req, res) => {
        try {
            const newTodo = await Todo.create(req.body); // req.body is the title of the new todo
            res.status(201).json(newTodo) // Return the newly created todo
        } catch (error) {
            res.status(400).json({message:"Bad request: " + error})
        }
    })

// Mongoose by default adds an _id field for each document (a unique identifier)
app.delete('/api/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        await Todo.findByIdAndDelete(id);
        res.sendStatus(204)
    } catch (error) {
        res.status(404).json({message:"Task not found"})
    }
})

// Get a single todo
app.get('/api/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const todo = await Todo.findById(id)
        res.json(todo)
    } catch (error) {
        res.status(404).json({message:"Task not found"})
    }
})

// Endpoint to toggle completion of todos
app.put('/api/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const todo = await Todo.findById(id)
        todo.completed = !todo.completed
        await todo.save()
        res.json(todo)
    } catch (error) {
        res.status(404).json({message:"Task not found"})
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
