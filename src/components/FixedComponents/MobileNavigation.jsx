import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import {
  faBell,
  faEnvelope,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const MobileNavigation = () => {
  return (
    <div className="block sm:hidden">
      <div className="bottom-0 left-0 right-0   bg-black fixed z-20">
        <div className="flex items-center justify-between py-1 px-8">
          <NavLink to="/">
            <NavigationLink icon={faHome} />
          </NavLink>
          <NavLink to="/Search">
            <NavigationLink icon={faSearch} />
          </NavLink>
          <NavLink to="/notifications">
            <NavigationLink icon={faBell} />
          </NavLink>
          <NavLink to="/messages">
            <NavigationLink icon={faEnvelope} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
