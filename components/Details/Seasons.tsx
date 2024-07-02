import { Card } from "@nextui-org/card";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { AnilistInfo } from "@/lib/types/info";

function Seasons({
  animeData,
  showHeader,
}: {
  animeData: AnilistInfo;
  showHeader: boolean;
}) {
  console.log(animeData);

  return (
    <div className="w-full h-full items-center justify-between flex flex-col gap-5">
      {showHeader && <h1 className="text-2xl  h-fit font-bold ">SEASONS</h1>}

      <ScrollArea className="w-full h-fit  whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-2">
          {animeData.relations &&
            animeData.relations.map((rel, i) => (
              <Card
                key={i}
                isFooterBlurred
                radius="lg"
                className="border-none flex flex-col md:flex-row w-fit"
              >
                <div className="relative w-[400px] h-[200px] my-auto">
                  <Image
                    alt={rel.relationType}
                    className="object-cover h-full w-full brightness-50"
                    height={270}
                    src={rel.cover}
                    width={270}
                  />

                  <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
                    <p className="text-white text-xl font-bold">
                      {rel.relationType}
                    </p>
                    <p>
                      {rel.title.english ??
                        rel.title.romaji ??
                        rel.title.native}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default Seasons;
