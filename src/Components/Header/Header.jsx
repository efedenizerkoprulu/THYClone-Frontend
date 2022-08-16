import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {Link} from 'react-router-dom'




const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <nav>
      <div className="header">
        <img
          src="https://cdn.turkishairlines.com/m/2190da9e53a70e4e/original/THY-LOGO.png"
          alt="logo"
        />
        <ul> 
       <Link to= {open ? "/planemenutab":"/"}  > <li onMouseEnter={() => handleOpen()}
           onMouseLeave={() => handleClose()}>
             PLANLA &amp; UÇ</li></Link>

           <Link  to= {open ? "/travelexperiencetab":"/"} ><li onMouseEnter={() => handleOpen()}
           onMouseLeave={() => handleClose()}>SEYEHAT DENEYİMİ</li></Link>

         <Link to= {open ? "/discovertab":"/"}> <li onMouseEnter={() => handleOpen()}
           onMouseLeave={() => handleClose()}>KEŞFET</li></Link>
          <li>
            <samp className="register-text">üye ol</samp>
          </li>
          <li>
            <button className="btn btn-transparent navbar-btn">
              Giriş Yap
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
