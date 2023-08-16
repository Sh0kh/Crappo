import React from "react";
import '../styles/Section8.css';
import market__img from '../images/Table.png'
function Section8() {
    return(
      <section className="market3">
        <div className="container">
            <div className="market__wrapper">
                <div className="market__content">
                    <h2>
                        Grow your profit and track your investments
                    </h2>
                    <p>
                    Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
                <div className="market__img">
                    <img className="market__img2" src={market__img} alt="" />
                </div>
            </div>
        </div>
      </section>
    )
}
export default Section8