import React from 'react';
import './Navbar.css';

const Navbar = ({ theme, timerTypes }) => {
    // console.log(timerTypes);
    // console.log(theme);

    return (
        <>
            <div className="header">
                <div className='logo'>
                    <a href="/">
                        <img src="https://pomofocus.io/icons/icon-white.png" width='20' height='20'></img>
                        <h2>Pomofocus</h2>
                    </a>
                </div>
                <div className='options'>
                    <button>
                        <img src="https://pomofocus.io/icons/graph-white.png" />
                        <span>Report</span>
                    </button>
                    <button>
                        <img src="https://pomofocus.io/icons/config-white.png" />
                        <span>Setting</span>
                    </button>
                    <button>
                        <img src="https://pomofocus.io/icons/user-white.png" />
                        <span>Login</span>
                    </button>
                </div>
            </div>
            <hr className="separator" />
        </>
    )
}

export default Navbar;