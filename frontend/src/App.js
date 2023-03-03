import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"; 
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Sidebar from './components/Sidebar';
import Explore from "./Pages/Explore.js";
import Event from "./Pages/Event";
import ToDoList from "./Pages/ToDoList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
          <Routes>
             <Route path='/' element={<Home />} exact></Route>
             <Route path='/signUp' element={<SignUp />} exact></Route>
             <Route path='/explore' element={<Explore />} exact></Route>
             <Route path='/login' element={<Login />} exact></Route>
             <Route path='/event' element={<Event />} exact></Route>
             <Route path='/toDoList' element={<ToDoList />} exact></Route>
          </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
