import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditerPage from './pages/EditerPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/editer/:roomId' element={<EditerPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
