const RecommendedPicture = ({ photo }) => {
  return (
    <span className="h-9 w-9 rounded-full inline-block ">
      <img src={photo} className="w-full rounded-full" />
    </span>
  );
};

export default RecommendedPicture;
