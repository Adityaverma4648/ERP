import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"; 
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
          <Routes>
             <Route path='/' element={<Home />} exact></Route>
             <Route path='/signUp' element={<SignUp />} exact></Route>
             <Route path='/login' element={<Login />} exact></Route>
          </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
