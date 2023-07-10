import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import "./App.css";
import {
  browserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import Protected from "./components/Protected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const { user } = useAuthContext();
  const notify = () => toast("Logged in");
  const logout = () => toast("Logged out");

  // useEffect(()=>{
  //   if(localStorage.getItem("user")){
  //     notify();
  //   }else{
  //     logout();
  //   }

  // }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar notify={notify} />
        </header>

        <main>
          <ToastContainer />
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
