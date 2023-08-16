import React from "react";
import '../styles/Section7.css';
import market__img from '../images/Statistic.png'
function Section7() {
    return(
      <section className="market2">
        <div className="container">
            <div className="market__wrapper">
                <div className="market__img">
                    <img className="market__img2" src={market__img} alt="" />
                </div>
                <div className="market__content">
                    <h2>
                        Detailed Statistics
                    </h2>
                    <p>
                    View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
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
export default Section7