import Hastags from "../../FixedComponents/RightComponents/Hastags";
import Right from "../../FixedComponents/RightComponents/RightInput";
import Post from "../Home/Post/Post";

const Search = () => {
  return (
    <div className="w-full  border-r border-borderGray h-full pt-4">
      <div className="px-4">
        <Right placeholderName={"Keşfet'te ara"} />
      </div>
      <div className="px-4 mb-4 ">
        <Hastags />
      </div>
      <div className="h-full">
        <Post />
      </div>
    </div>
  );
};

export default Search;
