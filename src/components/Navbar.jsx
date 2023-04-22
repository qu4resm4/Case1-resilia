import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.module.css';

function Navbar() {
    const [isTransparent, setTransparent] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      },[])
    
      function handleScroll () {
        const scrollTop = window.pageYOffset;
        
        if(scrollTop > 0) {
          setTransparent(true);
        } else if (scrollTop === 0){
          setTransparent(false);
        }
      }

    return (
        <nav className={isTransparent ? "transparent" : "color"}>
            <ul className={`ul ${isTransparent ? "teste" : ""}`}>
            <li>Home</li>
            <li>Sobre nos</li>
            <li>Contato</li>
            <li>Login</li>
            </ul>
        </nav>
    )
};

export default Navbar;