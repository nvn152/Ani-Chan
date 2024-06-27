"use client";

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

  const { data, isFetching, error } = useGetStreamingLinks({
    id: episodeid,
    provider: "gogoanime",
  });

  const {
    data: episodes,
    isFetching: isFetchingEpisodes,
    error: errorInfo,
  } = useGetEpisodes({ id: animeid });

  const { data: info, isFetching: isFetchingAnimeDetails } = useGetAnimeDetails(
    { id: animeid }
  );

  if (errorInfo) {
    return <div>Error: {errorInfo.message}</div>;
  }

  if (isFetchingEpisodes || isFetchingAnimeDetails) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MaxWidthWrapper>
      <div className="w-full mt-[4.5rem] h-full dark:bg-[#080808] flex flex-col p-2 gap-2">
        {/* Main content section */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-5rem)] w-full gap-2">
          {/* Left section */}
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

          {/* Right section */}
          <div className="w-full lg:w-[30%] h-[300px]  rounded-lg lg:h-full  p-2">
            <NextEpisodes
              episodes={episodes}
              episodeid={episodeid}
              animeid={animeid}
              anime={info}
              isFetchingEpisodes={isFetchingEpisodes}
            />
          </div>
        </div>

        {/* Lower section */}
        <div className="h-[1240px] rounded-lg w-full bg-green-500 p-2">
          This is the lower div
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
