"use client";

import Banner from "@/components/Details/Banner";
import Episodes from "@/components/Details/Episodes";
import EpisodesItem from "@/components/Details/EpisodesItem";
import MobileBanner from "@/components/Details/MobileBanner";
import Seasons from "@/components/Details/Seasons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetAnimeDetails } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams<{ id: string }>();

  const { data: info, isFetching, error } = useGetAnimeDetails({ id });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!info) {
    return <div>No data available</div>;
  }

  console.log(info);

  return (
    <div className="w-full mt-[4.5rem] h-full dark:bg-[#080808] flex flex-col p-2 gap-2">
      {/* Main content section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[1150px] w-full gap-2">
        {/* Left section */}
        <div className="flex flex-col w-full lg:w-[70%] h-auto lg:h-full  gap-2">
          <div className="flex-grow hidden md:block rounded-lg">
            <Banner info={info} />
          </div>

          <div className="block md:hidden  min-h-[1000px] rounded-lg">
            <MobileBanner info={info} />
          </div>
          <div className="flex-grow mt-auto flex items-center justify-center relative rounded-lg">
            <Seasons animeData={info} />
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-[30%] h-[300px]  rounded-lg lg:h-full  p-2">
          <Episodes id={id} info={info} />
        </div>
      </div>

      {/* Lower section */}
      <div className="h-[1240px] rounded-lg w-full bg-green-500 p-2">
        This is the lower div
      </div>
    </div>
  );
}

export default Page;
