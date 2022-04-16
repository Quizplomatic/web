import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assests/quiz.svg'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="my-navbar">
          <div className="align-items-center">
            <img src={logo} alt="" className='logo' />
            <NavLink className="quizplomatic" to="/">Quizplomatic</NavLink>
          </div>

          <div>
            <ul className="navbar-nav d-flex flex-row justify-content-around links">
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/quiz">Quiz</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/all">All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/new">New</NavLink>
                </li>
                  
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar