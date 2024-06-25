"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnilistInfo } from "@/lib/types/info";

import { darkHexColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ info }: { info: AnilistInfo }) => {
  return (
    <div className="w-full h-[620px]">
      <div className="relative h-[620px] overflow-hidden">
        <div
          style={{
            backgroundColor:
              darkHexColor(info?.color ? info?.color : "#00FF7F", 80) ??
              "springgreen",
          }}
          className="absolute inset-0 h-[620px] w-full overflow-x-hidden scrollbar-hide"
        ></div>
        <div className="absolute inset-0 z-[1] overflow-x-hidden scrollbar-hide">
          <Image
            src={info.cover}
            alt={info.color! ?? info.title.english ?? info.title.romaji}
            width={1920}
            height={900}
            className="absolute inset-0 h-[620px] w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-transparent from-[80%] to-background" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-l from-transparent from-[80%] to-background" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-transparent from-[80%] to-background" />
        <div className="absolute inset-0 z-[5] bg-gradient-to-b from-transparent to-background">
          <div className="ml-10 mt-40 flex h-full flex-col justify-center">
            <div className="flex flex-col mb-72 items-center gap-4 md:flex-row lg:flex-row xl:flex-row">
              <Image
                src={info.image}
                className="max-h-[400px] rounded-xl object-cover"
                alt={info.title.english! ?? info.title.romaji!}
                width={300}
                height={500}
              />
              <div>
                <h1
                  style={{ color: info.color ?? "pink" }}
                  className="text-center text-3xl font-bold md:text-left lg:text-left"
                >
                  {info.title.english ?? info.title.romaji}
                </h1>
                <h2 className="text-center text-2xl font-semibold md:text-left lg:text-left">
                  {info.title.romaji}
                </h2>
                <div className="mt-2 max-w-xl">
                  <p>By: {info.studios?.join(", ")}</p>
                </div>
                <Dialog>
                  <DialogTrigger>
                    <div
                      className="-ml-2 mt-2 line-clamp-4 max-w-xl select-none rounded-lg px-2 text-left text-sm duration-300 hover:bg-black/20"
                      dangerouslySetInnerHTML={{
                        __html: info.description?.replace(/<br>/g, "")!,
                      }}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogDescription className="max-h-80 overflow-y-scroll text-lg scrollbar-hide">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: info.description!,
                        }}
                      />
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
                <div className="mt-2 flex flex-wrap gap-2">
                  {info.genres?.map((g: any, i: any) => (
                    <div
                      className="p-1 rounded-lg"
                      style={{
                        backgroundColor: "pink",
                      }}
                      key={g + i}
                    >
                      <div className="text-black">
                        <Link href={`/catalog?type=ANIME&genres=${g}&page=1`}>
                          {g}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-center md:justify-start lg:justify-start xl:justify-start"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
