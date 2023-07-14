import ProfileHeader from "./ProfileHeader";
import PostTemplate from "../PostTemplate";

import userTweets from "./DataTweets";
import dataUserProfile from "./DataUserProfile";
const Profile = () => {
  return (
    <div className="w-full border-r border-borderGray">
      {dataUserProfile.map((data, index) => (
        <ProfileHeader
          name={data.name}
          userName={data.username}
          tweetNumber={data.tweetNumber}
          profilePhoto={data.profilePhoto}
          location={data.location}
          joinTime={data.joinTime}
          followers={data.followers}
          following={data.following}
          key={index}
        />
      ))}

      {userTweets.map((tweet, index) => (
        <PostTemplate
          postProfilePhoto={tweet.image}
          postHeader={tweet.name}
          postUsername={tweet.username}
          postContent={tweet.content}
          postLike={tweet.like}
          postRetweet={tweet.retweet}
          postView={tweet.views}
          postComment={tweet.comment}
          key={index}
        />
      ))}
    </div>
  );
};

export default Profile;
