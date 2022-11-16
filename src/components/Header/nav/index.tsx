import { FaBars } from "react-icons/fa";
import AcheterdropDown from "../dropdown/acheterdropdown";
import VendredropDown from "../dropdown/vendredropdown";
import Louerdropdown from "../dropdown/louerdropdown";
import AgendropDown from "../dropdown/agentdropdown";
import BlogdropDown from "../dropdown/blogdropdown";
import ContactdropDown from "../dropdown/contactdropdown";
import { Dispatch, FC, SetStateAction } from "react";

interface NavbarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavBar: FC<NavbarProps> = ({ open, setOpen }) => {
  return (
    <nav>
      <div className="main-navbar">
        <div id="mainnav">
          <div className="toggle-nav">
            <FaBars
              className="sidebar-bar tw-text-white"
              onClick={() => setOpen(true)}
            />
          </div>
          <ul className={`nav-menu ${open ? "open" : ""}`}>
            <li className="back-btn">
              <div
                className="mobile-back text-end"
                onClick={() => setOpen(false)}
              >
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
