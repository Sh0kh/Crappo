import React from "react";
import '../styles/Section3.css';
import mainer__img from "../images/mainer__img1.png"
function Hero() {
    return(
        <section className="mainer">
            <div className="container">
                <div className="mainer__wrapper">
                    <div className="mainer__img">
                        <img className="mainer__img" src={mainer__img} alt="" />
                    </div>
                    <div className="mainer__content">
                        <h1>
                            Why you should choose CRAPPO
                        </h1>
                        <p>
                        Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
                        </p>
                        <button>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero