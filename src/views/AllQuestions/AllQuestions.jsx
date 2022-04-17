import React, { useState, useEffect } from 'react'
import EditForm from '../../components/EditForm/EditForm'
import FilterButtons from '../../components/FilterButtons/FilterButtons'
import { getQuestions } from '../../services/QuizService'
import './AllQuestions.css'

const AllQuestions = () => {
    const [questions, setQuestions] = useState()
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('All')
    const [allCategories, setAllCategories] = useState()
    const [edit, setEdit] = useState({ active: false, id: '' })
    const [changedQuestion, setChangedQuestion] = useState(false)

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
    }, [changedQuestion || category])

    const filterQuestions = (selectedCategory) => {
        setCategory(selectedCategory)
    }

    const toggleEdit = (id) => {
        if (!id) {
            setEdit({ active: false, id: ''})
        } else {
            setEdit({ active: true, id: id })
        }
    }

    const changeQuestion = (data) => {
        setChangedQuestion(data)
        console.log(category)
    }

    

    return (
        <div className="AllQuestions">
            <h1>All Questions</h1>

            <div className="FilterButtons-all">
                <FilterButtons filterQuestions={filterQuestions} category={category} allCategories={allCategories} toggleEdit={toggleEdit}/>
            </div>

            {loading ? <p>Loading...</p> : 
                questions.map(question => {
                    return (
                        <div key={question._id} className="question">

                            {edit.active && edit.id === question._id ? 
                                <EditForm edit={edit} toggleEdit={toggleEdit} question={question} changeQuestion={changeQuestion}/>
                            :
                            <div className='mt-5'>
                                <h3>{question.title}</h3>
                                <p>{question.solution}</p>

                                <button onClick={() => toggleEdit(question._id)}>edit</button>
                                <button>delete</button>
                            </div>
                        }
                        </div>
                    )
                })
            
            }

        </div>
    )
}

export default AllQuestions