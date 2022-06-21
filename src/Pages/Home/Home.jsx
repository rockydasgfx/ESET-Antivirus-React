import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import useReview from "../../hooks/useReview";

const Home = () => {
  const [reviews, setReviews] = useReview();
  const threeReviews = reviews.slice(0, 3);

  return (
    <main>
      <div className="container mx-auto d-flex align-items-center justify-content-between my-4">
        <div>
          <h1 className="fw-bold">
            ESET INTERNET SECURITY <br />
            <span className="fs-3 fw-normal">EDITION 2022</span>
          </h1>
          <p>
            Ideal for modern users concerned about their privacy, <br /> who
            actively use internet for shopping, banking, work and communication
            <br />
            Secures Windows, macOS and Android devices.
          </p>
        </div>
        <img
          width="400px"
          className="img-fluid"
          src="./images/product.jpg"
          alt=""
        />
      </div>
      <section className="container mx-auto">
        <h2 className="text-center">Customer Reviews</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
          {threeReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/reviews">
            <button type="button" className="btn btn-primary text-center">
              See All Reviews
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
