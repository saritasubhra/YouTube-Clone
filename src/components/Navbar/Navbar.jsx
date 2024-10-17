import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import jack_img from "../../assets/jack.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) navigate(`/search/${searchTerm}`);
  }
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={menu_icon} alt="" className="menu-icon" />
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <form className="search-box flex-div" onSubmit={handleSubmit}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <button>
            <img src={search_icon} alt="" />
          </button>
        </form>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={jack_img} alt="" className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
