import Data from "./TweetData";
import PostTemplate from "../../PostTemplate";
const Post = () => {
  return (
    <div className="w-full h-full md:h-fit">
      {Data.map((post, index) => (
        <PostTemplate
          key={index}
          postProfilePhoto={post.profile}
          postImage={post.image}
          postHeader={post.name}
          postUsername={post.username}
          postContent={post.content}
          postComment={post.comment}
          postRetweet={post.retweet}
          postLike={post.like}
          postView={post.views}
        />
      ))}
    </div>
  );
};

export default Post;
