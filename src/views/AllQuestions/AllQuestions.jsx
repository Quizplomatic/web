import React, { useState, useEffect } from 'react'
import EditForm from '../../components/EditForm/EditForm'
import FilterButtons from '../../components/FilterButtons/FilterButtons'
import { deleteQuestion, getQuestions } from '../../services/QuizService'
import './AllQuestions.css'
import editIcon from '../../assests/pencil-square.svg'
import deleteIcon from '../../assests/trash.svg'

const AllQuestions = () => {
    const [questions, setQuestions] = useState()
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('All')
    const [allCategories, setAllCategories] = useState()
    const [edit, setEdit] = useState({ active: false, id: '' })
    const [changedQuestion, setChangedQuestion] = useState(false)
    const [didDelete, setDidDelete] = useState(false)
    const [search, setSearch] = useState ("")

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
            <hr />

            <div className="filter-search">
                <div className="FilterButtons-all">
                    <FilterButtons filterQuestions={filterQuestions} category={category} allCategories={allCategories} toggleEdit={toggleEdit}/>
                </div>

                <div className="search-question">
                    <h1>Search</h1>
                    <input type="text" onChange={(event) => setSearch(event.target.value)} />
                </div>
            </div>

            <div className="all-questions-div">
            {loading ? <p>Loading...</p> : 
                questions.map(question => {
                    if (question.title.toLowerCase().includes(search.toLowerCase()) || question.solution.toLowerCase().includes(search.toLowerCase()) ) {
                        return (
                            <div key={question._id} className="question">
    
                                {edit.active && edit.id === question._id ? 
                                    <EditForm edit={edit} toggleEdit={toggleEdit} question={question} changeQuestion={changeQuestion}/>
                                :
                                <div className="question-div-all">
                                    <h3 className="question-title-all">{question.title}</h3>
                                    <p className="question-solution-all">{question.solution}</p>


                                    <div className="buttons-div-all">
                                        <img src={editIcon} alt="" onClick={() => toggleEdit(question._id)} className="icon"/>
                                        <img src={deleteIcon} alt="" onClick={() => handleDelete(question._id)} className="icon"/>
                                    </div>  
                                </div>
                            }
                            </div>
                        )
                    }
                })
            }
            </div>
        </div>
    )
}

export default AllQuestions