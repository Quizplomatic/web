import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <h1 className="mt-2">Welcome to Quizzplomatic!</h1>
            <h2 className="mt-4">Ready to test your knowledge of... LITERALLY ANYTHING?</h2>
            <Link className="mt-3" to="/quizz">Let's start</Link>
        </div>
    )
}

export default Home