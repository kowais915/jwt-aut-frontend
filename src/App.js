import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import './App.css';
import {browserRouter, Routes, Route, Link, NavLink, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import Protected from './components/Protected';


function App() {
  const {user } = useAuthContext();

  return (
    <div className="App" >
     

      <BrowserRouter>
      
        <header>

          <Navbar/>

        </header>

        <main >
         
          <Routes>
            <Route  path="/about"  element={<About/>}/>

            

            <Route 
            
              path ="/dashboard" element={
              <Protected>
                <Dashboard/>
              </Protected>
          
          
            }/>

            <Route  path ="/login" element={<Login/>}/>

            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </main>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
