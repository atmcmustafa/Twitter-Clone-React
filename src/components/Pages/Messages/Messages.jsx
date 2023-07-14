import Right from "../../FixedComponents/RightComponents/RightInput";
import Header from "../Header/Header";
import MessageTemplate from "./MessageTemplate";
import MessagesIcon from "./MessagesIcon";
import messageData from "./DataMessages";

const Messages = () => {
  return (
    <div className="w-full pt-4 border-r border-borderGray ">
      <div
        className="flex justify-between items-center 
      "
      >
        <Header pageTitle={"Mesajlar"} />
        <MessagesIcon />
      </div>
      <div className="py-4 px-4">
        <Right placeholderName={"Mesajlarda ara"} />
      </div>
      <div className="h-full md:h-fit">
        {messageData.map((message, index) => (
          <MessageTemplate
            name={message.name}
            image={message.image}
            username={message.username}
            timestamp={message.timestamp}
            message={message.message}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
