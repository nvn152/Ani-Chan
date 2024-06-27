"use client";

import Tab from "@/components/Home/Tab";
import { useGetHomePageData } from "@/lib/react-query/queriesAndMutations";

import { HomeCarousel } from "@/components/Home/HomeCrousel";
import { MaxWidthWrapper } from "@/components/Shared/MaxWidthWrapper";

export default function Home() {
  const { data: HomePageData, isFetching: isFetchingHomePageData } =
    useGetHomePageData({ page: 1, perPage: 30 });

  if (isFetchingHomePageData)
    return <div className="mt-[4.5rem]">Loading...</div>;

  return (
    <MaxWidthWrapper>
      <div className="h-full max-w-8xl dark:bg-[#080808] p-2 md:p-4 mx-auto mt-[4.5rem]">
        <HomeCarousel data={HomePageData.trendingAnime.results} />

        <div className="flex w-full h-full flex-row flex-wrap my-5">
          <Tab
            TrendingData={HomePageData.trendingAnime.results}
            PopularData={HomePageData.popularAnime.results}
            TopRatedData={HomePageData.mostScored.results}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
