import Search from "../Pages/Search/Search";
import Notifications from "../Pages/Notifications/Notifications";
import Messages from "../Pages/Messages/Messages";
import Lists from "../Pages/Lists/Lists";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import Verified from "../Pages/Verified/Verified";
import More from "../Pages/More";
import SendTweet from "../Pages/TweetPush/SendTweet";
import Home from "../Pages/Home/Home.jsx";
import Profile from "../Pages/Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/more" element={<More />} />
      <Route path="/sendTweet" element={<SendTweet />} />
    </Routes>
  );
};

export default RoutesComponent;
