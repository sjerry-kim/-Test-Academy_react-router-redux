import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Memo from './pages/Memo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/memo' element={<Memo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
