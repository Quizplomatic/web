import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllQuestions from './views/AllQuestions/AllQuestions';
import Home from './views/Home/Home';
import NewQuestion from './views/NewQuestion/NewQuestion';
import Quiz from './views/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <div className='main'>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/all' element={<AllQuestions />} />
            <Route path='/new' element={<NewQuestion />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
