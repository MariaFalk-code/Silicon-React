import Woman from "../assets/icons and logos/icon woman.png";
import Man from "../assets/icons and logos/icon man.png";

const Reviews = () => {
  return (
    <section className="reviews flex-ct gap-1 hidden-XS-S">
      <h2>
        Clients are <br />
        Lovning Our App
      </h2>
      <div className="rew">
        <i className="fa-solid fa-quote-left cite-box"></i>
        <img className="stars" src="resources/icons and logos/rating-4stars.png" alt="4 star review" />
        <p>
          Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus,
          egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
        </p>
        <div className="author">
          <img src={Woman} alt="icon woman" />
          <cite>Fannie Summers</cite>
          <small>Designer</small>
        </div>
      </div>
      <div className="rew">
        <i className="fa-solid fa-quote-left cite-box"></i>
        <img src="resources/icons and logos/rating-5stars.png" alt="5 star review" />
        <p>
          Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt
          eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
        </p>
        <div className="author">
          <img src={Man} alt="icon man" />
          <cite>Albert Flores</cite>
          <small>Developer</small>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
