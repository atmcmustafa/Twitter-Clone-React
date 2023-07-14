import RecommendedPicture from "./RecommendedPicture";
import recommendedData from "./RecommendedData";

const Recommended = () => {
  return (
    <div className="!relative min-h-screen">
      <div className="mt-4 rounded-xl bg-[#16181C] top-8 sticky ">
        <h1 className="text-xl font-bold p-4 mb-3">Kimi takip etmeli</h1>
        {recommendedData.map((data, index) => (
          <div
            key={index}
            className="px-4 hover:bg-white/5 py-2 text-white cursor-pointer duration-200"
          >
            <div className=" flex justify-between">
              <div className="flex gap-2">
                <div className="mr-1">
                  <RecommendedPicture photo={data.image} />
                </div>
                <div>
                  <span className="font-bold">{data.name}</span>
                  <p className="text-gray-500">{data.username}</p>
                </div>
              </div>
              <button className="bg-white h-fit text-black px-4 rounded-full py-1 my-auto hover:text-black/80">
                Takip Et
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
