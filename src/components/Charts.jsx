import React, { useState } from 'react';
import Chart from './Chart';

const Charts = ({ coinData }) => {
    const [show, setShow] = useState(false);

    const handleShow = (e) => {
        // if(coinData.name === e){
        //     setShow(!show);
        // }
        console.log(e);
        setShow(!show);
    }

    console.log(coinData);
    return (
        <div className="charts">
            {coinData.map(coin => (
                <div className="chart__container" key={coin.name}>
                    <h2 className="coin__title">{coin.name}</h2>
                    <h4 className="coin__symbol">{coin.symbol}</h4>
                    <div className="coin__logo">
                        <img src={coin.image} height="40" alt={coin.name}/>
                    </div>
                    <button onClick={() => handleShow(coin.name)}>Chart</button>
                    {show ? <Chart sparklineData={coin.sparkline_in_7d.price} setShow={setShow} /> : ""}
                </div>
            ))}
        </div>
    )
}

export default Charts;