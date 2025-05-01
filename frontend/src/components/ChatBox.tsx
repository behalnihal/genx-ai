import { useState } from "react";
import { cn } from "../lib/utils";
import { ShineBorder } from "./magicui/shine-border";
import { SendButton } from "./SendButton";

export const ChatBox = () => {
  const [message, setMessage] = useState("");
  const handleSendMessage = (message: string) => {
    // implement send message

    console.log(message);
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
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          const target = e.target as HTMLTextAreaElement;
          setMessage(target.value);
          if (e.key === "Enter") {
            handleSendMessage(target.value);
          }
        }}
      />
      <SendButton onClick={() => handleSendMessage(message)} />
    </div>
  );
};
