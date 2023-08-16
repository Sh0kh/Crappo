import React from "react";
import '../styles/Section5.css';
import btc from '../images/logos_bitcoin.png'
import ETH from '../images/ETH.png'

function Section5() {
    return(
      <section className="trade">
            <div className="container">
                <h1>
                Trade securely and market the high growth cryptocurrencies.
                </h1>
                <div className="trade__wrapper">
                    <div className="trade__card1">
                        <img src={btc} alt="" />
                        <h2 className="btc__h2">
                            Bitcoin
                        </h2>
                        <p>
                             Digital currency in which a record of transactions is maintained.
                        </p>
                        <button>
                            Start mining
                        </button>
                    </div>
                    <div className="trade__card">
                        <img src={ETH} alt="" />
                        <h2 className="btc__h2">
                            Ethereum
                        </h2>
                        <p>
                            Blockchain technology to create and run decentralized digital applications.
                        </p>  
                    </div>
                    <div className="trade__card">
                        <img src={btc} alt="" />
                        <h2 className="btc__h2">
                            Litecoin
                        </h2>
                        <p>
                            Cryptocurrency that enables instant payments to anyone in the world.
                        </p>
                    </div>
                </div>
            </div>
      </section>
    )
}
export default Section5