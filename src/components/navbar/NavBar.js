import logo from "./imgs/logo.png";
import "../navbar/NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";

export const NavBar = () => {
  const { user, signIn, logOut } = useContext(AuthContext);

  // go to the top of the page to show the right content
  const handelScroll = () => {
    window.scrollTo(0, 100);
  };

  return (
    <>
      <div className="nav_container">
        <div className="logo">
          <Link to="/HomePage">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right_elements">
          <ul>
            <li>
              <Link to="/DailyDigest">Daily Digest</Link>
            </li>
            <li>
              <Link to="/DesignTools">Design Tools</Link>
            </li>

            <li>
              <Link to="/Tutorials">Tutorials</Link>
            </li>
          </ul>

          <span>
            {user ? (
              <>
                <Link onClick={handelScroll} to="/AddBlog" id="newBlog">
                  New Blog <i class="fa-solid fa-plus"></i> &nbsp; &nbsp;
                </Link>
                <Link className="add_blog" onClick={logOut} to="/">
                  {user.userName} <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
              </>
            ) : (
              <button className="subsBtn" onClick={signIn}>
                SingIn
              </button>
            )}
          </span>
        </div>
      </div>
    </>
  );
};
