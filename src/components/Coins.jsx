import React, { useState } from 'react';
import Chart from './Chart';
import Details from './Details';

const Charts = ({ coinData }) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState();

    const handleShow = (id) => {
        selected === id ? setSelected(null) : setSelected(id);
        setShow(!show);
    }

    return (
        <div className="coins">
            {coinData.map(coin => (
                <div className="coin__container" key={coin.name} onClick={() => handleShow(coin.id)}>
                    {/* <div className="coin__rank">{coin.market_cap_rank}</div> */}
                    <h2 className="coin__title">{coin.name}</h2>
                    <div className="coin__logo">
                        <img src={coin.image} height="40" alt={coin.name}/>
                    </div>
                    <h4 className="coin__symbol">{coin.symbol}</h4>
                    {selected === coin.id ? <Details coin={coin} /> : null}
                    {/* <button onClick={() => handleShow(coin.id)}>Chart</button> */}
                    {selected === coin.id ? <Chart sparklineData={coin.sparkline_in_7d.price} /> : null}
                </div>
            ))}
        </div>
    )
}

export default Charts;