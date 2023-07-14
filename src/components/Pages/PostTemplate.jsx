import PostProfile from "./Home/Post/PostProfile";
import {
  faArrowUpFromBracket,
  faChartSimple,
  faComment,
  faEllipsis,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../../components/Pages/Home/TopSide/Icon";
import StatisticIcon from "../Pages/Home/Post/StatisticIcon";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Post = ({
  postProfilePhoto,
  postHeader,
  postUsername,
  postContent,
  postImage,
  postComment,
  postRetweet,
  postLike,
  postView,
}) => {
  return (
    <div className="w-full ">
      <div className="border border-borderGray p-4 hover:bg-grayBackground/50 cursor-pointer w-full ">
        <div className="flex gap-3 w-full">
          <PostProfile profilePhoto={postProfilePhoto} />
          <div className="flex flex-col w-full">
            <div className="flex items-center w-full">
              <div className="flex w-full ">
                <h3 className="font-bold text-base mr-2">{postHeader}</h3>
                <span className="text-gray-500">{postUsername}</span>
              </div>
              <Icon iconName={faEllipsis} />
            </div>
            <p className="md:text-base tracking-wide">{postContent}</p>
            <img src={postImage} className="rounded-xl my-3 w-full" />
            <div className="text-gray-500 text-[14px] leading-7 flex gap-2.5 sm:gap-6 md:gap-10 xl:gap-24">
              <StatisticIcon
                hoverEffect={"twitterBlue"}
                icon={faComment}
                number={postComment}
              />

              <StatisticIcon
                hoverEffect={"twitterBlue"}
                icon={faRetweet}
                number={postRetweet}
              />
              <StatisticIcon
                hoverEffect={"twitterBlue"}
                icon={faHeart}
                number={postLike}
              />
              <StatisticIcon
                hoverEffect={"twitterBlue"}
                icon={faChartSimple}
                number={postView}
              />
              <StatisticIcon
                hoverEffect={"twitterBlue"}
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
