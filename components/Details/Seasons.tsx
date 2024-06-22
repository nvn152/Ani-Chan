import { Anime } from "@/lib/types/animeInterface";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import { relative } from "path";
import { title } from "process";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

function Seasons({ animeData }: { animeData: Anime }) {
  console.log(animeData);

  return (
    <ScrollArea className="w-full  whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {animeData.relations &&
          animeData.relations.map((rel, i) => (
            <Card
              key={i}
              isFooterBlurred
              radius="lg"
              className="border-none flex flex-col md:flex-row w-fit"
            >
              <div className="relative w-[270px] h-[380px]">
                <Image
                  alt={rel.relationType}
                  className="object-cover h-full w-full brightness-50"
                  height={270}
                  src={rel.image}
                  width={270}
                />

                <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
                  <p className="text-white text-xl font-bold">
                    {rel.relationType}
                  </p>
                  <p>
                    {rel.title.english ?? rel.title.romaji ?? rel.title.native}
                  </p>
                </div>
              </div>

              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-tiny mx-auto text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Watch
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default Seasons;
