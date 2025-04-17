import { cn } from "@/lib/utils";
import { DotPattern } from "./magicui/dot-pattern";

export const Home = () => {
  return (
    <div className="relative min-h-screen w-full pb-40 overflow-hidden">
      <DotPattern
        className={cn(
          "absolute inset-0 z-0 [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex flex-col gap-y-8 items-center">
        <div className="from-red-300 via-red-400 to-red-500 bg-gradient-to-r bg-clip-text text-center text-transparent text-4xl font-bold font-['Ubuntu'] mt-12">
          Create what's on your mind today
        </div>
        <span className="text-center text-gray-500 text-sm font-['Ubuntu']">
          Prompt, Create and Share Content with GenX AI
        </span>

        <input
          className="box-border border-1 bg-gray-800 rounded-lg h-24 w-1/2 placeholder:opacity-70"
          type="text"
          placeholder="How can GenX help you today?"
        />
      </div>
    </div>
  );
};
