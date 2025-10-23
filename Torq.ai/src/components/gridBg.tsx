import { cn } from "../lib/utils";
import { Button } from "./ui/moving-border";
import { useNavigate } from "react-router-dom";
export function GridBackground() {
    const navigate=useNavigate();
    return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col justify-center items-center">
      <p className="relative z-2 flex flex-col gap-y-2 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-9xl">
        Torq
      </p>
      <h6 className="sm:text-3xl text-xl text-center text-neutral-400">
        Your personalised AI soultion to everything.
      </h6>
      <Button
      onClick={()=>{navigate("/live")}}
        borderRadius="1.75rem"
        className="bg-white w-full mt-0.5 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            Get Started
      </Button>
          </div>
    </div>
  );
}
