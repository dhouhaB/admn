/*import "./App.css";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">

<Home/>









    </div>
  );
}
 
export default App;
*/
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./login/Login";
import {useContext} from 'react'
import Users from "./components/Users/Users";
function App() {
  const currentUser=false;
  const RequireAuth=({children})=>
  {
    return currentUser?(children):<Navigate to="login"/>
  }

  return (
    <div className="App">
    <Routes>
  <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
  <Route path="/" element={<Home />} />

  <Route path="/login/login" element={<RequireAuth><Login/></RequireAuth>} />
  <Route path="/login" element={<Login />} />
  <Route path="/user" element={<Users />} />

</Routes>











    </div>
  );
}
 
export default App;