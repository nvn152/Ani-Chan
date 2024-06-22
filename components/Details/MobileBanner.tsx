import { darkHexColor, numberToMonth } from "@/lib/utils";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";

function MobileBanner({ info }: { info: any }) {
  return (
    <div className="relative  rounded-lg w-full h-[500px] ">
      <div className="absolute inset-0">
        <div
          style={{
            backgroundColor:
              darkHexColor(info?.color ? info?.color : "#00FF7F", 80) ??
              "springgreen",
          }}
          className="absolute inset-0 h-[500px] w-full overflow-x-hidden scrollbar-hide"
        ></div>
        <Image
          src={info.cover}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="overflow-hidden"
        />
      </div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-transparent from-[80%] to-background" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-l from-transparent from-[80%] to-background" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-transparent from-[80%] to-background" />
      <div className="absolute inset-0 z-[5]  bg-gradient-to-b from-transparent to-background">
        <div className=" mt-40 flex h-full flex-col justify-center">
          <div className="flex flex-col mb-2 items-center gap-4 md:flex-row lg:flex-row xl:flex-row">
            <Image
              src={info.image}
              className="max-h-[400px] rounded-xl object-cover"
              alt={info.title.english! ?? info.title.romaji!}
              width={300}
              height={500}
            />
          </div>

          <div>
            <h1
              style={{ color: info.color ?? "pink" }}
              className="text-center text-3xl h-fit font-bold md:text-left lg:text-left"
            >
              {info.title.english ?? info.title.romaji}
            </h1>

            <h3 className="text-center mb-5 text-sm font-semibold">
              {info.title.native}
            </h3>

            {info.genres?.map((g: any, i: any) => (
              <Chip key={i} variant="faded" className="m-1">
                <Link href={`/catalog?type=ANIME&genres=${g}&page=1`}>{g}</Link>
              </Chip>
            ))}

            <div className="m-4 flex flex-col gap-3">
              <div className="">
                Total Episodes:{" "}
                <Chip color={"primary"} variant={"bordered"}>
                  {" "}
                  {info.totalEpisodes}
                </Chip>
              </div>

              <div>
                Aired:{" "}
                <Chip color={"primary"} variant={"bordered"}>
                  <div className="flex gap-1">
                    <span>{info.startDate.day}</span>
                    <span>{numberToMonth(info.startDate.month!)}</span>
                    <span>{info.startDate.year}</span>
                  </div>
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBanner;
