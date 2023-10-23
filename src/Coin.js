import React from "react";


function Coin(props) {
  return (
    <div className="Coin">
      <img src={props.src} side={props.alt} />
    </div>
  );
}

export default Coin;