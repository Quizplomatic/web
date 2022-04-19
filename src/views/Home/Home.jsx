import { Link } from 'react-router-dom'
import './Home.css'
import friso from '../../assests/grecia.jpeg'


const Home = () => {
    return (
        <>
        <img src={friso} alt="" className="friso"/>
        <div className="Home">

            <div>
                <h1 className="mt-2">Welcome to Quizplomatic!</h1>
                <h2 className="mt-5 mb-5">Put your dimplomacy skills and knowledge to the test!</h2>
                <Link className="lets-start" to="/quiz">Let's start!</Link>
            </div>


        </div>
        </>
    )
}

export default Home