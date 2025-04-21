import { cn } from "../lib/utils";
import { ShineBorder } from "./magicui/shine-border";
import { SendButton } from "./SendButton";

export const ChatBox = () => {
  const handleSendMessage = () => {
    // implement send message
    console.log("send message");
  };
  return (
    <div
      className={cn(
        "shadow-sm border border-neutral-400 backdrop-filter backdrop-blur-[8px] rounded-lg overflow-hidden"
      )}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <textarea
        className={`w-full pl-4 pt-4 pr-16 focus:outline-none resize-none bg-transparent min-h-[150px] min-w-[375px]`}
        placeholder="How can GenX help you today?"
        translate="no"
      />
      <SendButton onClick={() => handleSendMessage()} />
    </div>
  );
};
