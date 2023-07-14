import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TweetButton = () => {
  return (
    <button className="bg-twitterBlue rounded-full py-3 font-bold hover:bg-twitterBlue/80 hover:duration-300 mt-4 w-12 h-12 ms-auto md:w-[250px] md:ms-0 mr-4">
      <span className="md:block hidden">Tweet</span>
      <span className="block md:hidden">
        <FontAwesomeIcon icon={faFeather} />
      </span>
    </button>
  );
};

export default TweetButton;
