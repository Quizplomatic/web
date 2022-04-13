const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'You need to include a title!']
        },
        solution: {
            type: String,
            required: [true, 'You need to include a solution!']
        },
        category: {
            type: String,
            required: [true, 'You need to select a category!']
        },
        id: {
            type: String,
        }
    }, 

    { timestamps: true }
)

const Question = mongoose.model('Question', questionSchema)
module.exports = Question
