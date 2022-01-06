import React from "react";

const Details = ({ coin }) => {
  return (
    <div className="details__container">
        <h5 className="detail">Market Cap Rank: {coin.market_cap_rank}</h5>
        <h5 className="detail">Market Cap: {coin.market_cap}</h5>
        <h5 className="detail">Circulating Supply: {coin.circulating_supply}</h5>
        <h5 className="detail">Max Supply: {coin.max_supply}</h5>
        <h5 className="detail">Total Supply: {coin.total_supply}</h5>
    </div>
  );
};

export default Details;

/*
Market Cap Rank
1
Market Cap
823,396.46M
Circulation Supply
18,921,043
Max Supply
21,000,000
Total Supply
18,921,043
Issue Date
2008-10-31 17:00
Issue Price
*/