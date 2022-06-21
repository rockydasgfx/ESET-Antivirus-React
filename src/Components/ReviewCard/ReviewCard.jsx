import React from "react";

const ReviewCard = (props) => {
  const { name, reviews, rating } = props.review;
  return (
    <div className="col">
      <div className="card h-100  ">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{reviews}</p>
          <p className="card-footer">
            Reting: <span className="text-warning">{rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
