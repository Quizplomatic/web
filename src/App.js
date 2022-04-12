import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Quizz from './views/Quizz/Quizz';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quizz' element={<Quizz />} />
      </Routes>
    </div>
  );
}

export default App;
