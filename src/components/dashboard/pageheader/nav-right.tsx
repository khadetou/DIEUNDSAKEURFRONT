import { Maximize, Save, Bell, Search, Mail } from "react-feather";
import MessageChat from "./dropdown/message-chat";
import FileAttachement from "./dropdown/FileAttachement";
import Notification from "./dropdown/Notification";
import Profile from "./dropdown/Profile";

const NavRight = () => {
  return (
    <div className="nav-right col p-0">
      <ul className="header-menu">
        <li>
          <div className="d-md-none mobile-search">
            <Search />
          </div>
          <div className="form-group search-form">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
          </div>
        </li>
        <li>
          <a onClick={() => console.log("javascript:toggleFullScreen()")}>
            <Maximize />
          </a>
        </li>
        <li className="onhover-dropdown">
          <a href="#!">
            <Save />
          </a>
          <FileAttachement />
        </li>
        <li className="onhover-dropdown notification-box">
          <a href="#">
            <Bell />
            <span className="label label-shadow label-pill notification-badge">
              3
            </span>
          </a>
          <Notification />
        </li>
        <li className="onhover-dropdown">
          <a href="#!">
            <Mail />
          </a>
          <MessageChat />
        </li>
        <Profile />
      </ul>
    </div>
  );
};

export default NavRight;
