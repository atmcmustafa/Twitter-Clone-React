import {
  faEllipsis,
  faHome,
  faSearch,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import {
  faBell,
  faBookmark,
  faCheckCircle,
  faEnvelope,
  faListAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TweetButton from "../TweetButton";
import UserProfile from "../UserProfile";
import userPhoto from "../../assets/profile-pic.jpg";
const Navigation = () => {
  return (
    <ul className="sm:flex flex-col items-end w-fit hidden md:w-1/2 justify-between border-r border-borderGray sticky top-0 max-h-screen  h-full">
      <div className="flex flex-col justify-between h-screen ">
        <div className=" flex flex-col gap-2 w-full justify-center  ">
          <FontAwesomeIcon
            icon={faTwitter}
            className="w-fit text-3xl px-6 mt-4 ms-auto md:ms-0"
          />
          <NavLink to="/">
            <NavigationLink icon={faHome} title={"Anasayfa"} />
          </NavLink>
          <NavLink to="/Search">
            <NavigationLink icon={faSearch} title={"Keşfet"} />
          </NavLink>
          <NavLink to="/notifications">
            <NavigationLink icon={faBell} title={"Bildirimler"} />
          </NavLink>
          <NavLink to="/messages">
            <NavigationLink icon={faEnvelope} title={"Mesajlar"} />
          </NavLink>
          <NavLink to="/lists">
            <NavigationLink icon={faListAlt} title={"Listeler"} />
          </NavLink>
          <NavLink to="/bookmarks">
            <NavigationLink icon={faBookmark} title={"Yer İşaretleri"} />
          </NavLink>
          <NavLink to="/verified">
            <NavigationLink icon={faCheckCircle} title={"Onaylanmış"} />
          </NavLink>
          <NavLink to="/profile">
            <NavigationLink icon={faUserAlt} title={"Profil"} />
          </NavLink>
          <NavLink to="/more">
            <NavigationLink icon={faEllipsis} title={"Daha Fazla"} />
          </NavLink>
          <NavLink className={"flex"} to="/sendTweet">
            <TweetButton className={"w-fit"} />
          </NavLink>
        </div>
        <UserProfile
          userimg={userPhoto}
          name={"Mustafa Atmaca"}
          username={"mstfatmcc"}
        />
      </div>
      <Outlet />
    </ul>
  );
};

export default Navigation;
