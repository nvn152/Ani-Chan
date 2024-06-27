import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimeCard } from "@/components/Card/AnimeCard";
import { AnilistInfo } from "@/lib/types/info";

interface TabProps {
  TrendingData: AnilistInfo[];
  PopularData: AnilistInfo[];

  TopRatedData: AnilistInfo[];
}

export default function Tab({
  TrendingData,
  PopularData,

  TopRatedData,
}: TabProps) {
  return (
    <Tabs defaultValue="trending" className="w-full">
      <TabsList className="grid grid-cols-3 w-[400px] mx-auto">
        <TabsTrigger value="trending">Trending</TabsTrigger>
        <TabsTrigger value="popular">Popular</TabsTrigger>

        <TabsTrigger value="toprated">Top Rated</TabsTrigger>
      </TabsList>
      <TabsContent className="" value="trending">
        <div
          className={
            "w-full rounded-[0.3rem] border-none cursor-pointer font-bold relative overflow-hidden m-0 text-sm transition-colors duration-300 ease-in-out md:p-4 p-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 mx-auto"
          }
        >
          {TrendingData?.map((anime: AnilistInfo) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="popular">
        <div
          className={
            "w-full rounded-[0.3rem] border-none cursor-pointer font-bold relative overflow-hidden m-0 text-sm transition-colors duration-300 ease-in-out md:p-4 p-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 mx-auto"
          }
        >
          {PopularData?.map((anime: AnilistInfo) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="toprated">
        <div
          className={
            "w-full rounded-[0.3rem] border-none cursor-pointer font-bold relative overflow-hidden m-0 text-sm transition-colors duration-300 ease-in-out md:p-4 p-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 mx-auto"
          }
        >
          {TopRatedData?.map((anime: AnilistInfo) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
