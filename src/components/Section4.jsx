import React from "react";
import '../styles/Section4.css';

function Section4() {
    return(
        <section className="check">
            <div className="container">
                <h1>
                    Check how much you can earn
                </h1>
                <p className="check_p">
                    Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="chesk__card">
                    <p id="p1">
                        Enter your hash rate
                    </p>
                    <span>
                        TH/s
                    </span>
                    <button>
                        Calculate
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Section4