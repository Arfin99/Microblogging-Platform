
import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MicroBlogging Platform</span>
        </Link>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        </div>
        <div className="topbarIcons">
          
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/1.jpeg"
            }
            alt=""
            className="topbarImg"
          />
        </Link>

        <button onClick={handleLogout}>
            {"LOGOUT"}
          </button>

        <div className="topbarIconItem">
      
          </div>
      </div>
    </div>
  );
}