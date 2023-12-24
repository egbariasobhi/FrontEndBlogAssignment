import "../landingPge/LandingPage.css";
import { Link } from "react-router-dom";
import img from "./Vector.png";
import img2 from "./Group 98.png";
import img3 from "./Group 99.png";

export const LandingPage = () => {
  return (
    <div className="landPageContainer">
      <div className="content">
        <img src={img} alt="" className="logo" />
        <div>
          <h3>— a minimal blog template design.</h3>
          <p>
            Free for the design community.{" "}
            <Link className="cardLink" to={`/HomePage`}>
              &nbsp; Home Page <i class="fa-solid fa-house-chimney"></i>
            </Link>
          </p>
        </div>
      </div>
      <div className="rightSide">
        <img src={img2} alt="" className="img2" />
        <img src={img3} alt="" className="img3" />
      </div>
    </div>
  );
};
