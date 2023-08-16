import React from "react";
import '../styles/Section2.css';
import number__img1 from '../images/number__img1.png'
import number__img2 from '../images/numer__img2.png'
import number__img3 from '../images/number__img3.png'
function Hero() {
    return(
        <section className="numbers">
            <div className="container">
                <div className="number__wrapper">
                    <div className="card">
                        <img src={number__img1} alt="" />
                        <div className="text">
                            <h2>
                                $30B
                            </h2>
                            <p>
                                Digital Currency Exchanged
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={number__img2} alt="" />
                        <div className="text">
                            <h2>
                                10M+
                            </h2>
                            <p>
                                Trusted Wallets Investor
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={number__img3} alt="" />
                        <div className="text">
                            <h2>
                                 195
                            </h2>
                            <p>
                                Countries Supported
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero