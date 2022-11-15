import './Sidebar.css';

import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className='logo'>Admin</span></div>
        <div className='center'></div>
        <ul>
<li>
<DashboardIcon className="icon" />

    <span>Dashboard  </span></li>

<li>
<ExitToAppIcon className="icon" />

    <span>Logout</span></li>




        </ul>
        <div className='bottom'></div>






    </div>
  )
}

export default Sidebar