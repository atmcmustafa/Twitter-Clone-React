import Header from "../Header/Header";
import ListNavgiation from "./ListNavgiation";
import NewList from "./NewList";
import PinnedList from "./PinnedList";
import dataList from "./DataList";
const Lists = () => {
  return (
    <div className="w-full border border-borderGray pt-4 ">
      <ListNavgiation />
      <div className="mt-4">
        <Header pageTitle={"Sabitlenen Listeler"} />
      </div>
      <PinnedList
        content={
          "Burada henüz hiçbir şey görünmüyor. Hızlıca erişmek istediğin favori Listelerini üste sabitleyebilirsin."
        }
      />
      <div className="mt-4">
        <Header pageTitle={"Yeni Listeleri keşfet"} />
      </div>
      <div className=" mt-4 border-b border-borderGray">
        {dataList.map((data, index) => (
          <NewList
            listFollowers={data.listFollowers}
            listImg={data.listImg}
            listName={data.listName}
            key={index}
            listMember={data.listMember}
          />
        ))}
      </div>
      <div className="mt-4">
        <Header pageTitle={"Listelerin"} />
        <PinnedList
          content={
            "Hiç Liste oluşturmadın veya takip etmedin. Oluşturduğun veya takip ettiğin Listeler burada görünür."
          }
        />
      </div>
    </div>
  );
};

export default Lists;
