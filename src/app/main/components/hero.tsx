import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import GridPattern from "@/components/ui/grid-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

function HeroSection() {
  const words = [
    "Baik",
    "Ganteng",
    "Penyayang",
    "Ramah",
    "Baik hati",
    "Intelek",
    "Ceria",
  ];
  return (
    <div className="p-2 px-3">
      <div className="relative w-full h-svh max-h-[600px] mx-auto rounded-xl max-w-5xl bg-zinc-300/30 p-[3px] dark:bg-zinc-700/30">
        <Spotlight
          className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400"
          size={124}
        />
        <div className="relative h-full w-full rounded-xl bg-white dark:bg-black">
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
            )}
          />
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] ",
            )}
          />
          <div className="flex justify-center items-center relative size-full">
            <div className="uppercase">
              <div
                className="font-bold text-5xl md:text-5xl pl-5 lg:text-6xl"
                translate="no"
              >
                I'am
              </div>
              <div className="text-9xl font-extrabold md:hidden">Aulil</div>
              <div
                className="text-9xl font-extrabold hidden md:block"
                translate="no"
              >
                ulil absor
              </div>
              <div className="flex items-center px-1.5 md:px-4">
                <Button className="flex-1 h-11 md:h-14 relative ">
                  <FlipWords
                    words={words}
                    className="dark:text-black text-white text-2xl md:text-3xl capitalize"
                  />
                  <Plus className="absolute h-9 w-9 md:block hidden -top-3 -left-3 dark:text-white text-black" />
                  <Plus className="absolute h-9 w-9 md:block hidden -bottom-3 -left-3 dark:text-white text-black" />
                  <Plus className="absolute h-9 w-9 md:block hidden -top-3 -right-3 dark:text-white text-black" />
                  <Plus className="absolute h-9 w-9 md:block hidden -bottom-3 -right-3 dark:text-white text-black" />
                </Button>
                <div className="flex flex-col flex-1 text-right font-semibold md:text-2xl">
                  <span>A Junior</span>
                  <span>Dev or others</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
