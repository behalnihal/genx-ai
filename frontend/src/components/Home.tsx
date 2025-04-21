import { cn } from "@/lib/utils";
import { DotPattern } from "./magicui/dot-pattern";
import { ChatBox } from "./ChatBox";

export const Home = () => {
  return (
    <div className="relative min-h-screen w-full pb-40 overflow-hidden">
      <DotPattern
        className={cn(
          "absolute inset-0 z-0 [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex flex-col gap-y-8 items-center">
        <div className="text-4xl font-bold font-['Ubuntu'] mt-12">
          Create what's on your mind today
        </div>
        <span className="text-center text-gray-500 text-sm font-['Ubuntu']">
          Prompt, Create and Share Content with GenX AI
        </span>

        <ChatBox />
      </div>
    </div>
  );
};
