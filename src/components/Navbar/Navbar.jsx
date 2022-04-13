import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assests/quiz.svg'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} alt="" className='logo' />
          <NavLink className="navbar-brand" to="/">Quizplomatic</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/quiz">Quiz</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/all">All questions</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/new">Add new question</NavLink>
                </li>
                  
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar