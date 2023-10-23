import React, { useState } from "react";
import Images from "./images";
import pick from "./helpers";
import Coin from "./Coin";

const CoinContainer = (props)=>{

    const [coin, setCoin] = useState(null);
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);

    const handleClick = () => {
        const newCoin =pick(Images);
        setCoin(newCoin);
        if (newCoin.alt === "heads") {
          setHeadCount(oldCount => oldCount + 1);
        } else {
          setTailCount(oldCount => oldCount + 1);
        }
      };

      const currCoin = coin ? (
        <Coin side={coin.alt} src={coin.src} />
      ) : null;
    return (
        <div className="coincontainer">
            <h1>Flip a Coin!</h1>
            {currCoin}
            <button  onClick={handleClick}>Flip!</button>
            <p>Out of {headCount + tailCount} flips, there have been {headCount} heads
        and {tailCount} tails.</p>
        </div>
    );
}


export default CoinContainer;




