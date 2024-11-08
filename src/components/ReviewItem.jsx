const ReviewItem = ({ author, jobRole, starRating, avatarUrl, comment }) => {

  const renderStars = () => {
    const maxStars = 5;

    return Array.from({ length: maxStars }, (_, index) => (
      <i key={index} className={`fa-star ${index < starRating ? "fa-solid" : "fa-regular"} star-icon`}></i>
    ));
  };

  return (
    <div className="review">
        <i className="fa-solid fa-quote-left cite-box"></i>
        <div className="starRating mb-1">
          {renderStars()}
        </div>
        <p className="mb-1">{comment}</p>
        <div className="author">
          <img src={avatarUrl} alt={`${author}'s avatar`} />
          <cite>{author}</cite>
        <small>{jobRole}</small>
        </div>
      </div>
  );
};

export default ReviewItem;
