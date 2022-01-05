import React, { useState } from 'react';
import Chart from './Chart';

const Charts = ({ coinData }) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState();

    const handleShow = (id) => {
        selected === id ? setSelected(null) : setSelected(id);
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
                    <button onClick={() => handleShow(coin.id)}>Chart</button>
                    {selected === coin.id ? <Chart sparklineData={coin.sparkline_in_7d.price} /> : null}
                </div>
            ))}
        </div>
    )
}

export default Charts;