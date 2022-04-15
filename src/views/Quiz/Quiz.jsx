import './Quiz.css'
import React, { useState, useEffect } from 'react'
import { getQuestions } from '../../services/QuizService'
import FilterButtons from '../../components/FilterButtons/FilterButtons'

const Quiz = () => {   
    const [question, setQuestion] = useState({})
    const [loading, setLoading] = useState('false')
    const [seeSolution, setSeeSolution] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategories, setAllCategories] = useState()

    useEffect(() => {
        getQuestions()
            .then(questions => {
                setLoading(false)

                const randomQuestion = questions[Math.floor(Math.random() * (questions.length - 0) + 0)]
                setQuestion({...randomQuestion})

                const categories = []
                questions.forEach(question => {
                    if (!categories.includes(question.category)) {
                        categories.push(question.category)
                    }
                })

                setAllCategories(categories)
            })
            .catch(error => console.error(error))
        setCategory('All')
    }, [])

    const nextQuestion = () => {
        getQuestions()
            .then(questions => {
                if (category === 'All') {
                    const randomQuestion = questions[Math.floor(Math.random() * (questions.length - 0) + 0)]
                    setQuestion({...randomQuestion})
                    setSeeSolution(true)
                } else {
                    const filteredQuestions = [...questions].filter(question => question.category === category)
                    const randomQuestion = filteredQuestions[Math.floor(Math.random() * (filteredQuestions.length - 0) + 0)]
                    setQuestion({...randomQuestion})
                    setSeeSolution(true)
                }
            })
    }

    const toggleSolution = () => {
        setSeeSolution(seeSolution === false ? true : false)
    }

    const filterQuestions = (selectedCategory) => {
             setCategory(selectedCategory)
    }

    return (
        <div className="Quiz">
            {loading ? <p>Loading...</p> :  
            <>
           <FilterButtons filterQuestions={filterQuestions} category={category} allCategories={allCategories}/>

            <div className="question-card" >
                {!seeSolution ? 
                <h3>{question.title}</h3>
                : <h3>{question.solution}</h3>
            }
            </div>
            <p className="category">Category: {question.category}</p>

            <div className='answer'>
                <div className='write-answer'>
                    <label htmlFor="answer">Your answer:</label>
                    <input type="text" name="answer" id="" />
                </div>

                <div className="buttons">
                    <button className='solution-button' onClick={toggleSolution}>See {!seeSolution ? 'solution' : 'question'}</button>
                    <button className='solution-button' onClick={nextQuestion}>Next question</button>
                </div>
            </div>
            </>
            }
        </div>
    )
}

export default Quiz