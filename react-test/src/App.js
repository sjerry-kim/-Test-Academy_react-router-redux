import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Memo from './components/Memo';

function App() {
  return (
    <div className="App">
        <h1>홈 화면에 오신 것을 환영합니다</h1>
        <p>아래를 통해 방명록을 작성하실 수 있습니다</p>
        <Link to={'/memo'}>방명록 작성하기</Link>
        <Routes>
          <Route path='/memo' element={<Memo />}/>
        </Routes>
    </div>
  );
}

export default App;
