import { NavLink } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex-left gap-1 mt-3 social-media">
      <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-box">
        <i className="fa-brands fa-facebook"></i>
      </NavLink>
      <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-box">
        <i className="fa-brands fa-twitter"></i>
      </NavLink>
      <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-box">
        <i className="fa-brands fa-square-instagram"></i>
      </NavLink>
      <NavLink to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-box">
        <i className="fa-brands fa-youtube"></i>
      </NavLink>
    </div>
  );
};

export default SocialMedia;
