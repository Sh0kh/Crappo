import React from "react";
import '../styles/Header.css'


function Header() {
    return(
        <header>
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <img src="" alt="" />
                        <h2 className="h2">
                            CRAPPO
                        </h2>
                    </div>
                    <nav>
                        <ul className="ul">
                            <li>Products</li>
                            <li>Features</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                    <div className="lin">

                    </div>
                    <button className="header__btn">
                        Register
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header