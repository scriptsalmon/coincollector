import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from './Coin';

const CoinList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(data);
  
  return (
    <>
        {data.map(data => {
            return (
                <Coin key={data.id} data={data}/>
            )
        })}
    </>
  );
};

export default CoinList;
