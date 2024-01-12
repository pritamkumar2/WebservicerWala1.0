import React from "react";

function Cards(props) {
  return (
    <>
      <div className="cards bg-white ">
        <div className="card">
        <div className="card-img">
          <img
            src={props.image}
            alt="devlopment img"
            height="300"
            width="300"
          />
          </div>
          <div className="show">
            <h2 className="card-provider">{props.provider}</h2>
          </div>
          <p className="card-title">{props.service}</p>
          <h4>{props.description}</h4>

          <a href={props.link}>
            <button className="btn card-btn">
              {props.price}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Cards;
