import React from "react";
import '../styles/Hero.css';
import hero__img from "../images/hero__1.png";
function Hero() {
    return(
      <section className="hero">
            <div className="container">
                <div className="position">
                    <div className="hero__wrapper">
                        <div className="hero__content">
                            <div className="hero__btn">
                                <div className="text1">
                                    <span>
                                        75% SAVE
                                    </span>
                                </div>
                                <span className="text2">
                                    For the Black Friday weekend
                                </span>
                            </div>
                            <h1 className="hero__h1">
                                Fastest & secure platform to invest in crypto
                            </h1>
                            <p className="hero__p"> 
                            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
                            </p>
                            <button className="hero__btn2">
                                Try for FREE
                            </button>
                        </div>
                        <img className="hero__img" src={hero__img} alt="" />
                    </div>
                </div>
            </div>
      </section>
    )
}
export default Hero