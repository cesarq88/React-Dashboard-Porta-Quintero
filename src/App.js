import './App.css';
import {BrowserRouter, Navigate, Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Login from './components/Login/Login';




function App() {
  return (
    <>
      <BrowserRouter>
            
            <Routes>
              <Route exact path="/login" element={<Login/>} />
              <Route path="/" element={<Main />}>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/users/" element={<Users />} />
                  <Route exact path="/error" element={<Error/>} />
                  <Route path="*" element={<Navigate to ="/error"/>} />
              </Route>

            </Routes>
              

          
            
      </BrowserRouter>
    
   
    </>
  );
}

export default App;
