import './Quizz.css'
import questions from '../../data/questions.json'
import React, { useState, useEffect } from 'react'

const Quizz = () => {
    const [quizz, setQuizz] = useState(questions)
    const randomQuestion = quizz[Math.floor(Math.random() * (quizz.length - 0) + 0)]
    const [question, setQuestion] = useState({})
    const [seeSolution, setSeeSolution] = useState(false)
    const [category, setCategory] = useState('')

    useEffect(() => {
        setQuestion({...randomQuestion})
        setCategory('All')
    }, [])

    const nextQuestion = () => {
        setQuestion({...randomQuestion})
        setSeeSolution(false)
    }

    const toggleSolution = () => {
        setSeeSolution(seeSolution === false ? true : false)
    }

    const filterQuestions = (selectedCategory) => {
        if (selectedCategory === "All" ) {
            setCategory('All')
            setQuizz([...questions])
        } else {
            setCategory(selectedCategory)
            setQuizz([...questions].filter(question => question.category === selectedCategory))
        }
    }

    return (
        <div className="Quizz">
            <h2>Filter questions:</h2>
            <div>
                <button onClick={() => filterQuestions("Bloque 1")} style={{backgroundColor: category === "Bloque 1" ? 'pink' : 'white'}}>Bloque 1</button>
                <button onClick={() => filterQuestions("Bloque 2")} style={{backgroundColor: category === "Bloque 2" ? 'pink' : 'white'}}>Bloque 2</button>
                <button onClick={() => filterQuestions("Bloque 3")} style={{backgroundColor: category === "Bloque 3" ? 'pink' : 'white'}}>Bloque 3</button>
                <button onClick={() => filterQuestions("Bloque 4")} style={{backgroundColor: category === "Bloque 4" ? 'pink' : 'white'}}>Bloque 4</button>
                <button onClick={() => filterQuestions("Cultura General")} style={{backgroundColor: category === "Cultura General" ? 'pink' : 'white'}}>Cultura</button>
                <button onClick={() => filterQuestions("All")} style={{backgroundColor: category === "All" ? 'pink' : 'white'}}>All</button>
            </div>


            <div className="question-card">
                {!seeSolution ? 
                <h3>{question.title}</h3>
                : <h3>{question.solution}</h3>
            }
            </div>

            <div className='answer'>
                <div className='write-answer'>
                    <label htmlFor="answer">Your answer:</label>
                    <input type="text" name="answer" id="" />
                </div>
                <button className='solution-button' onClick={toggleSolution}>See {!seeSolution ? 'solution' : 'question'}</button>
                <button className='solution-button' onClick={nextQuestion}>Next question</button>
            </div>
        </div>
    )
}

export default Quizz