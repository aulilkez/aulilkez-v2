import { content } from "@/__mock__/__data__/test-md";
import { useTheme } from "@/components/providers/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { Separator } from "@/components/ui/separator";
import { LucideKey, ShareIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";

function BlogDetail() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className="mx-auto px-2 py-2">
      <div className="relative">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
        <div className="aspect-video bg-accent mt-3 rounded-md relative max-w-3xl mx-auto">
          <code className="absolute bottom-2 right-2 rounded bg-muted-foreground px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            12 January 2024
          </code>
        </div>
      </div>
      <div className="py-2 space-y-2 mb-2 mt-3 max-w-4xl mx-auto">
        <Separator className="h-[0.7px] rounded-md" />
        <div className="py-1.5 px-2 flex justify-between items-center">
          <div className="space-x-2 flex items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-lg font-semibold">Aulil Kez</h1>
          </div>
          <div className="space-x-2">
            <Button size={"icon"}>
              <LucideKey />
            </Button>
            <Button size={"icon"}>
              <ShareIcon />
            </Button>
          </div>
        </div>
        <Separator />
      </div>
      <article className="prose prose-zinc mt-5 dark:prose-zinc [&_*]:text-accent-foreground lg:prose-xl max-w-4xl px-1 mx-auto">
        <Markdown children={content}></Markdown>
      </article>
    </div>
  );
}

export default BlogDetail;
