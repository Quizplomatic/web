import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../../assests/quiz.svg'

const Home = () => {
    return (
        <div className="Home">
            <h1 className="mt-2">Welcome to Quizplomatic!</h1>
            <h2 className="mt-4">Ready to test your knowledge of... LITERALLY ANYTHING?</h2>
            <Link className="mt-3" to="/quiz">Let's start</Link>
            <img src={logo} alt="" />
        </div>
    )
}

export default Home