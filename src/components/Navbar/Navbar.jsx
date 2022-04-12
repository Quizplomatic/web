import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Quizzplomatic</NavLink>
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
                    <NavLink className="nav-link"  to="/quizz">Quizz</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/all">All questions</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/vocabulary">Vocabulary</NavLink>
                </li>
                  
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar