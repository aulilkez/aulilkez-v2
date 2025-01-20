import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Boxes, List, Plus } from "lucide-react";

function ToolsSection() {
  return (
    <section className="max-w-5xl mx-auto px-3 md:px-6 mb-6 py-3 mt-4">
      <Card className="">
        <CardHeader className="mb-0 flex gap-3 flex-row items-center">
          <Button size={"icon"}>
            <List />
          </Button>
          <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl inline-block align-middle">
            Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="mb-4">
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea
            officia voluptatem ducimus deleniti officiis doloremque expedita
            numquam consequuntur, minus reiciendis sequi dolores cupiditate
            neque molestias delectus eum rem facere!
          </CardDescription>
          <div className="relative">
            <Card className="py-3 mt-5 flex overflow-x-scroll overflow-y-hidden relative overscroll-none border-none space-x-2 pl-2 scrollbar-thin shadow-none">
              {Array.from({ length: 12 }).map((_, idx) => (
                <Card
                  className="group w-48 min-w-48 border-2 relative flex items-center p-0 hover:bg-accent"
                  key={idx}
                >
                  {/* Isi konten utama */}
                  <CardContent className="py-4 px-0 w-full space-y-3 items-center flex-col flex">
                    <div className="flex flex-col gap-y-2 justify-center items-center">
                      <Boxes />
                      <CardTitle>Pdf to Word</CardTitle>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm" className="capitalize w-4/5 mx-auto">
                          Get started!
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>

                  {/* Elemen Plus */}
                  <div className="hidden group-hover:block transition-opacity duration-500">
                    <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black opacity-0 group-hover:opacity-100" />
                    <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black opacity-0 group-hover:opacity-100" />
                    <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black opacity-0 group-hover:opacity-100" />
                    <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black opacity-0 group-hover:opacity-100" />
                  </div>
                </Card>
              ))}
            </Card>
            <div className="absolute -right-1 top-0 bottom-0 w-12 bg-gradient-to-l from-background blur-sm to-transparent z-50" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default ToolsSection;
