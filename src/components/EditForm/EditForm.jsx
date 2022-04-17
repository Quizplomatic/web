import './EditForm.css'
import react, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { updateQuestion } from '../../services/QuizService'

const EditForm = ({ question, toggleEdit, changeQuestion }) => {
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        setValue("title", question.title)
        setValue("solution", question.solution)
        setValue("id", question._id)
    }, [])

    const submitEdit = ( data ) => {
        updateQuestion(data)
            .then(() => {
                toggleEdit()
                changeQuestion(data)
            })
    }

    return (
        <FormProvider>
            <form action="/update" method="patch" className="mt-5 edit-form" onSubmit={handleSubmit((data) => submitEdit(data))}>
                <textarea className="textarea" type="text" name="title" id="question" {...register('title')} />
                <textarea className="textarea" type="text" name="solution" id="solution" {...register('solution')} />
                <div className="mt-4">
                    <button type="submit">submit</button>
                    <button onClick={toggleEdit}>cancel</button>
                </div>
            </form>
        </FormProvider>
    )
}

export default EditForm