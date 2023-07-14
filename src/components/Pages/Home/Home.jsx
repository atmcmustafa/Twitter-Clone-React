import BlockBar from "../Header/BlockBar";
import Header from "../Header/Header";
import Post from "./Post/Post";
import TweetInput from "./TopSide/TweetInput";

const Home = () => {
  return (
    <div className="w-full pt-4 border-r border-borderGray">
      <Header pageTitle={"Anasayfa"} />
      <div className="flex">
        <BlockBar blockName={"Sana özel"} isActive={true} />
        <BlockBar blockName={"Takip Edilenler"} isActive={false} />
      </div>
      <TweetInput />
      <Post />
    </div>
  );
};

export default Home;
