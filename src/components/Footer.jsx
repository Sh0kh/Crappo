import React from "react";
import '../styles/Footer.css';
import visa from '../images/Visa.png'
import master from '../images/Mastercard.png'
import Bitcoin from '../images/Bitcoin.png'
function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="logo">
                        <h1>
                            CRAPPO
                        </h1>
                    </div>
                    <ul>
                        <h4>
                            Quick Link
                        </h4>
                        <li>
                            Home
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                    <ul>
                        <h4>
                            Resources
                        </h4>
                        <li>
                            Home
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                    <div className="we">
                        <h2>
                            We accept following payment system
                        </h2>
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                        <img src={Bitcoin} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer