import React from "react";
import "./Card.css";

function Card({ title, place, start, end, desc }) {
  return (
    <div className="card-container">
      {/* <div className="image-container">
        <img src={imageUrl} alt="" />
      </div> */}
      <div className="card-content">
        <div className="card-title">
          <h3>{title} @ {place}</h3>
          <p>{start} - {end}</p> 
        </div>
        <div className="card-body">
          <p>{desc}</p>
        </div>
      </div>
      {/* <div className="btn">
        <button>
          <a>View more</a>
        </button>
      </div> */}
    </div>
  );
}

export default Card;
