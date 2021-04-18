import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
   /* const [button, setButton] = useState(true);*/

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /*const showButton = () => {
        if (window.unnerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };
    useEffect(() =>{
        showButton();
    }, []);
    window.addEventListener('resize', showButton); */
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <div className='logo-container'>
                    <h1 className="logo">JOHN MAKES</h1>
                    <h1 className="web">WEBSITES</h1>
                </div>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;


