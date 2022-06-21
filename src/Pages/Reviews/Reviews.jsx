import React from "react";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import useReview from "../../hooks/useReview";

const Reviews = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="container mx-auto">
      <h2 className="text-center">Our Buyers Say</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
