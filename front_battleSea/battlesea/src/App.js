import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './pages/GamePage';
import Login from './pages/Login';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/game/:gameId' element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Login/>
    <GamePage/> */}
    </div>
  );
}

export default App;
