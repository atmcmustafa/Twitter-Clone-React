import RightInput from "./RightComponents/RightInput";
import VerifiedCard from "./RightComponents/VerifiedCard";
import Hastags from "./RightComponents/Hastags";
import Recommended from "./RightComponents/Recommended";

const RightNavigation = () => {
  return (
    <div className=" w-1/2 hidden xl:block mt-4 ml-6 h-full ">
      <RightInput placeholderName={"Twitter'da ara"} />
      <VerifiedCard />
      <Hastags />
      <Recommended />
    </div>
  );
};

export default RightNavigation;
