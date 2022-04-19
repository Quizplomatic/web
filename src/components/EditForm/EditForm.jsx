import './EditForm.css'
import react, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { updateQuestion } from '../../services/QuizService'
import submitIcon from '../../assests/check-circle.svg'
import cancelIcon from '../../assests/x-circle.svg'

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
            <form action="/update" method="patch" className="edit-form" onSubmit={handleSubmit((data) => submitEdit(data))}>
                <textarea className="textarea" type="text" name="title" id="question" {...register('title')} />
                <textarea className="textarea" type="text" name="solution" id="solution" {...register('solution')} />
                
                <div>
                    <button className="submit-button icon" type="submit"><img src={submitIcon} alt=""/></button>
                    <img src={cancelIcon} alt="" onClick={toggleEdit} className="icon" />
                </div>

                <hr className=""/>
            </form>
        </FormProvider>
    )
}

export default EditForm