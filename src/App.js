import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import './App.css';
import {browserRouter, Routes, Route, Link, NavLink, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
      
        <header>

          <Navbar/>

        </header>

        <main>
          <Routes>
            <Route  path="/about"  element={<About/>}/>

            <Route path ="/dashboard" element={<Dashboard/>}/>

            <Route  path ="/login" element={<Login/>}/>
          </Routes>
        </main>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
