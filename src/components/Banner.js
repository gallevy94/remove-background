import "./Banner.css";

import logo from "../assets/logo.png";
import banner from "../assets/banner.png";

function Banner() {
  return (
    <>
      <img src={logo} className="logo_img" />
      <img src={banner} className="banner_img" />
    </>
  );
}

export default Banner;
