import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useForm, FormProvider } from 'react-hook-form'
import { createQuestion } from '../../services/QuizService'
import './NewQuestion.css'

const initialForm = {
    title: '',
    solution: '',
    category: ''
}

const NewQuestion = () => {
    const [data, setData] = useState(initialForm)
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target

        setData({ ...data, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const { title, solution, category } = data

        if (!title || !solution || !category) {
            setErrors(true)

            } else {
                createQuestion({...data})
                    .then(question => {
                        // navigate('/all')
                        setErrors(false)
                        console.log(data)
                    })
                    .catch(error => setErrors(error?.response?.data?.errors))
                }
    }

    return (
        <>
        <form className="NewQuestion" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter the title of the question..." onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="solution">Solution:</label>
                <input type="text" name="solution" id="solution" placeholder="Enter the solution..." onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="category">Catergory:</label>
                <select name="category" id="category" onChange={handleChange}>
                    <option selected="selected" disabled="disabled">Select a category</option>
                    <option value="Bloque 1">Bloque 1</option>
                    <option value="Bloque 2">Bloque 2</option>
                    <option value="Bloque 3">Bloque 3</option>
                    <option value="Bloque 4">Bloque 4</option>
                    <option value="Cultura General">Cultura General</option>
                </select>
            </div>

            <button type='submit'>Submit</button>
        </form>
        {errors && <div className="alert alert-dark" role="alert">Check all fields!</div>}
        </>
    )
}

export default NewQuestion