import React, { useState, useEffect } from 'react'
import FilterButtons from '../../components/FilterButtons/FilterButtons'
import { getQuestions } from '../../services/QuizService'
import './AllQuestions.css'

const AllQuestions = () => {
    const [questions, setQuestions] = useState()
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('All')
    const [allCategories, setAllCategories] = useState()

    useEffect(() => {
        getQuestions()
            .then(questions => {
                const categories = []
                questions.forEach(question => {
                    if (!categories.includes(question.category)) {
                        categories.push(question.category)
                    }
                })

                setAllCategories(categories)

                if (category === 'All') {
                    setQuestions(questions)
                    setLoading(false)
                } else {
                    setQuestions(questions.filter(question => question.category === category))
                }
            })
            .catch(error => console.error(error))
    }, [category])

    const filterQuestions = (selectedCategory) => {
        setCategory(selectedCategory)
    }

    return (
        <div className="AllQuestions">
            <h1>All Questions</h1>
            <FilterButtons filterQuestions={filterQuestions} category={category} allCategories={allCategories}/>
            {loading ? <p>Loading...</p> : 
                questions.map(question => {
                    return (
                        <div key={question._id} className="question">
                            <h3 className='mt-5'>{question.title}</h3>
                            <p>{question.solution}</p>
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    )
                })
            
            }

        </div>
    )
}

export default AllQuestions