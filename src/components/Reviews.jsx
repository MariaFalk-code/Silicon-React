import ReviewItem from "./ReviewItem";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  const fetchReviewData = async () => {
    const response = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials");
    const data = await response.json();
    setReviewData(data);
  };

  useEffect(() => {
    fetchReviewData();
  }, []);

  return (
    <section className="reviews flex-ct gap-1 hidden-XS-S">
      <h2>
        Clients are <br />
        Lovning Our App
      </h2>
      {reviewData.map((review) => (
        <ReviewItem
          key={review.id}
          author={review.author}
          jobRole={review.jobRole}
          starRating={review.starRating}
          avatarUrl={review.avatarUrl}
          comment={review.comment}
        />
      ))}
    </section>
  );
};

export default Reviews;
