import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubTodo',
            },
        ], //array of sub-Todos
    },
    {
        timestamps: true,
    }
);

export const Todo = mongoose.model('Todo', todoSchema);

// it'll sotre mongoose database with name of todos instead of Todo
// it convert Todo name into a todos plurals 
