import { FaBars } from "react-icons/fa";
import AcheterdropDown from "../dropdown/acheterdropdown";
import VendredropDown from "../dropdown/vendredropdown";
import Louerdropdown from "../dropdown/louerdropdown";
import InvestirdropDown from "../dropdown/investirdropdown";
import AgendropDown from "../dropdown/agentdropdown";
import BlogdropDown from "../dropdown/blogdropdown";
import ContactdropDown from "../dropdown/contactdropdown";

const NavBar = () => {
  return (
    <nav>
      <div className="main-navbar">
        <div id="mainnav">
          <div className="toggle-nav">
            <FaBars className="sidebar-bar" />
          </div>
          <ul className="nav-menu">
            <li className="back-btn">
              <div className="mobile-back text-end">
                <span>Back</span>
                <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
              </div>
            </li>
            <li className="dropdown">
              <a className="nav-link menu-title">Acheter</a>
              <AcheterdropDown />
            </li>
            <li className="dropdown">
              <a className="nav-link menu-title">Vendre</a>
              <VendredropDown />
            </li>
            <li className="dropdown">
              <a className="nav-link menu-title">Louer</a>
              <Louerdropdown />
            </li>
            <li className="dropdown">
              <a className="nav-link menu-title">Agents</a>
              <AgendropDown />
            </li>
            <li className="mega-menu">
              <a className="nav-link menu-title">Blog</a>
              <BlogdropDown />
            </li>
            <li className="dropdown">
              <a className="nav-link menu-title">Contact</a>
              <ContactdropDown />
            </li>
            <li className="dropdown">
              <a className="nav-link menu-title">Investir</a>
              {/* <InvestirdropDown /> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
