import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {RiComputerLine} from 'react-icons/ri'
import './Navbar.css'
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobile = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true)
        }
    }

    // useEffect(() => {
    //     showButton();
    //     window.addEventListener('resize', showButton);
    //     return {
    //         window.removeEventListener('resize', showButton)
    //     }
    // }, [])

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-name" onClick={closeMobile}>
                    <RiComputerLine className="navbar-icon" />
                    Jones Technologies
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/products' className="nav-links" onClick={closeMobile}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className="nav-links" onClick={closeMobile}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobile}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary'>SIGN UP</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobile}>
                                SIGN UP
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul> 
            </div>
        </nav>
    </>
  )
}

export default Navbar