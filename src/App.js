import './App.css';
import './assets/css/Font.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
