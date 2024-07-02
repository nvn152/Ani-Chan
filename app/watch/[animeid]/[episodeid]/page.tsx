"use client";

import Seasons from "@/components/Details/Seasons";
import { MaxWidthWrapper } from "@/components/Shared/MaxWidthWrapper";
import { AnimeControl } from "@/components/Watch/AnimeControl";
import { NextEpisodes } from "@/components/Watch/NextEpisodes";
import { Player } from "@/components/Watch/Player";
import {
  useGetAnimeDetails,
  useGetEpisodes,
  useGetStreamingLinks,
} from "@/lib/react-query/queriesAndMutations";
import { NextPage } from "next";
import { useParams } from "next/navigation";

const Page: NextPage = () => {
  const { animeid, episodeid } = useParams<{
    animeid: string;
    episodeid: string;
  }>();

  const { data, isFetching } = useGetStreamingLinks({
    id: episodeid,
    provider: "gogoanime",
  });

  const { data: episodes, isFetching: isFetchingEpisodes } = useGetEpisodes({
    id: animeid,
  });

  const { data: info, isFetching: isFetchingAnimeDetails } = useGetAnimeDetails(
    { id: animeid }
  );

  if (isFetchingEpisodes || isFetchingAnimeDetails) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <MaxWidthWrapper>
      <div className="w-full mt-[4.5rem] h-full dark:bg-[#080808] flex flex-col p-2 gap-2">
        <div className="flex flex-col lg:flex-row h-auto w-full gap-2">
          <div className="flex flex-col w-full lg:w-[70%] h-auto gap-2">
            <Player data={data} />

            <div className="flex-grow  mt-auto flex items-center justify-center relative rounded-lg">
              <AnimeControl
                anime={info}
                episodeid={episodeid}
                episodes={episodes}
              />
            </div>
          </div>

          <div className="w-full lg:w-[30%] h-[350px]  rounded-lg lg:h-full  p-2">
            <NextEpisodes
              episodes={episodes}
              episodeid={episodeid}
              animeid={animeid}
              info={info}
              isFetchingEpisodes={isFetchingEpisodes}
            />
          </div>
        </div>

        <div className="h-[1240px] rounded-lg w-full bg-green-500 p-2"></div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
