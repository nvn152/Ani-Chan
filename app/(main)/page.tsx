"use client";

import Tab from "@/components/Home/Tab";
import {
  useGetMostScoredAnime,
  useGetPopularAnime,
  useGetTopRatedAnime,
  useGetTrendingAnime,
} from "@/lib/react-query/queriesAndMutations";

import { HomeCarousel } from "@/components/Home/HomeCrousel";

export default function Home() {
  const { data: TrendingData, isFetching: isFetchingTrending } =
    useGetTrendingAnime({ perPage: 32, page: 1 });
  const { data: PopularData, isFetching: isFetchingPopular } =
    useGetPopularAnime({ perPage: 32, page: 1 });
  const { data: MostScoredData, isFetching: isFetchingMostScored } =
    useGetMostScoredAnime({ perPage: 32, page: 1 });

  const { data: TopRatedData, isFetching: isFetchingTopRated } =
    useGetTopRatedAnime({ perPage: 32, page: 1 });

  if (
    isFetchingTrending ||
    isFetchingPopular ||
    isFetchingMostScored ||
    isFetchingTopRated
  )
    return <div className="mt-[4.5rem]">Loading...</div>;

  console.log(TrendingData);

  return (
    <div className="h-full max-w-8xl dark:bg-[#080808] p-2 md:p-4 mx-auto mt-[4.5rem]">
      <HomeCarousel data={TrendingData?.results} />

      <div className="flex w-full h-full flex-row flex-wrap my-5">
        <Tab
          TrendingData={TrendingData?.results}
          PopularData={PopularData.results}
          TopRatedData={TopRatedData.results}
        />
      </div>
    </div>
  );
}
