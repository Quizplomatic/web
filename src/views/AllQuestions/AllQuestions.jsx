import React, { useState, useEffect } from 'react'
import EditForm from '../../components/EditForm/EditForm'
import FilterButtons from '../../components/FilterButtons/FilterButtons'
import { deleteQuestion, getQuestions } from '../../services/QuizService'
import './AllQuestions.css'

const AllQuestions = () => {
    const [questions, setQuestions] = useState()
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('All')
    const [allCategories, setAllCategories] = useState()
    const [edit, setEdit] = useState({ active: false, id: '' })
    const [changedQuestion, setChangedQuestion] = useState(false)
    const [didDelete, setDidDelete] = useState(false)

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
                    setDidDelete(false)
                } else {
                    setQuestions(questions.filter(question => question.category === category))
                    setDidDelete(false)
                }
            })
            .catch(error => console.error(error))
    }, [changedQuestion, category, didDelete])

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
    }

    const handleDelete = (id) => {
        deleteQuestion(id)
            .then(() => setDidDelete(true))
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
                                <button onClick={() => handleDelete(question._id)}>delete</button>
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