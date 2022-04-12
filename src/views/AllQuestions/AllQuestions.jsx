import './AllQuestions.css'
import questions from '../../data/questions.json'

const AllQuestions = () => {
    return (
        <div className="AllQuestions">
            <h1>All Questions</h1>
            {questions.map(question => {
                return (
                    <div key={question.id}>
                        <h3 className=''>{question.title}</h3>
                        <p>{question.solution}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default AllQuestions