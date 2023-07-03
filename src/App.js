import Navbar from './components/Navbar';
import './App.css';
import {browserRouter, Routes, Route, Link, NavLink, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
      
        <header>

          <Navbar/>

        </header>

        <main>
          <Routes>

          </Routes>
        </main>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
