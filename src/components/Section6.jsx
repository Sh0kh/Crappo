import React from "react";
import '../styles/Section6.css';
import market__img from '../images/Chart.png'
function Section6() {
    return(
      <section className="market">
        <div className="container">
            <h1>
            Market sentiments, portfolio, and run the infrastructure of your choice
            </h1>
            <div className="market__wrapper">
                <div className="market__content">
                    <h2>
                         Invest Smart
                    </h2>
                    <p>
                        Get full statistic information about the behaviour of buyers and sellers will help you to make the decision
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
export default Section6