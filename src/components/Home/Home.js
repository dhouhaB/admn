import  List from "../list/List";
import './home.css'

import Navbar from "../Navbar/Navbar";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const [filter,setFilter]=('');
  return (
    <div className="home">
   

<div className="homecontainer">
<Navbar setFilter={setFilter}></Navbar>
<List/>


    
</div>

</div>
   
  )
}

export default Home