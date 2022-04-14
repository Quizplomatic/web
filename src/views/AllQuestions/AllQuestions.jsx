import React, { useState, useEffect } from 'react'
import { getQuestions } from '../../services/QuizService'
import './AllQuestions.css'

const AllQuestions = () => {
    const [questions, setQuestions] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getQuestions()
            .then(questions => {
                setQuestions(questions)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="AllQuestions">
            <h1>All Questions</h1>
            {loading ? <p>Loading...</p> : 
                questions.map(question => {
                    return (
                        <div key={question.id} className="question">
                            <h3 className=''>{question.title}</h3>
                            <p>{question.solution}</p>
                        </div>
                    )
                })
            
            }

        </div>
    )
}

export default AllQuestions