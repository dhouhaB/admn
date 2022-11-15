import "./Navbar.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


const Navbar = () => {
  return (
    <div className="navbar">
    <div className="wrapper1">

<div className="search">
<input type="text" placeHolder ="Search" />
<SearchOutlinedIcon></SearchOutlinedIcon> 





</div>
<div className="items">

{/*
<div className="item">
<LanguageOutlinedIcon className="icon" ></LanguageOutlinedIcon>

    English
</div>
  */}

  <div className="item">
            <img
              src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
              alt=""
              className="avatar"
            />
          </div>
          <div className="item">

<ExitToAppIcon className="icon" />

LogOut
</div>


    
</div>


        
    </div>







        
    </div>
  )
}

export default Navbar