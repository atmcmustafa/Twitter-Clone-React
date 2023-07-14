import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Icon from "../Home/TopSide/Icon";
import PostTemplate from "./../PostTemplate";
import bookmarkData from "./DataBookmarks";
const Bookmarks = () => {
  return (
    <div className="w-full border-r border-borderGray pt-4 relative">
      <div className="flex justify-between items-center sticky top-0 bg-black/80 py-1">
        <div>
          <Header pageTitle={"Yer İşaretleri"} />
          <span className="text-gray-500 ml-4">@mstfatmcc</span>
        </div>
        <span className="mr-2">
          <Icon iconName={faEllipsis} />
        </span>
      </div>

      {bookmarkData.map((data, index) => (
        <PostTemplate
          key={index}
          postProfilePhoto={data.profile}
          postImage={data.image}
          postHeader={data.name}
          postUsername={data.username}
          postContent={data.content}
          postComment={data.comment}
          postRetweet={data.retweet}
          postLike={data.like}
          postView={data.views}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
