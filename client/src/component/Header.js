import React from 'react';
import './Header.css';

function Header() {
    return (
            <nav className = "header">
             <img 
                className = "header_logo" 
                src = "logo.png"
                alt = ""    
                />
          <div className = "header_nav">
          </div>
       </nav> 
    )
}

export default Header;