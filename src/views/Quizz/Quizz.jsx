import './Quizz.css'
import questions from '../../data/questions.json'
import React, { useState, useEffect } from 'react'

const Quizz = () => {
    const { question, solution } = questions[Math.floor(Math.random() * (questions.length - 0) + 0)]
    const [quizz, setQuizz] = useState({})
    const [seeSolution, setSeeSolution] = useState(false)

    const nextQuestion = () => {
        setQuizz({ 
            question,
            solution
        })
        setSeeSolution(false)
    }

    const toggleSolution = () => {
        setSeeSolution(seeSolution === false ? true : false)
    }

    // useEffect(() => {
        
    // })

    return (
        <div>
            <div className="question-card">
                <h3>{quizz.question}</h3>
            </div>

            <div className='answer'>
                <div className='write-answer'>
                    <label htmlFor="answer">Your answer:</label>
                    <input type="text" name="answer" id="" />
                </div>
                <button className='solution-button' onClick={toggleSolution}>See solution</button>
                <button className='solution-button' onClick={nextQuestion}>Next question</button>
            </div>
        </div>
    )
}

export default Quizz