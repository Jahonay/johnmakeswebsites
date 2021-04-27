import React, { useState } from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';



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
                <HashLink smooth to='/#' className='navbar-logo' onClick={closeMobileMenu}>
                <div className='logo-container'>
                    <h1 className="logo">JOHN MAKES</h1>
                    <h1 className="web">WEBSITES</h1>
                </div>
                </HashLink>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <HashLink smooth to='/#home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink smooth to='/#services' className='nav-links' onClick={closeMobileMenu}>
                          Services
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink smooth to='/#my-work' className='nav-links' onClick={closeMobileMenu}>
                          My Work
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink smooth to='/#contact' className='nav-links' onClick={closeMobileMenu}>
                          Contact
                        </HashLink>
                    </li>
                    
                </ul>
            </div>

        
        </nav>
        </>
    )
}

export default Navbar;


