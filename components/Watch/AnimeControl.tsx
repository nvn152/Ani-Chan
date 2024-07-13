import { AnilistInfo } from "@/lib/types/info";
import { AnimeProviders } from "./AnimeProviders";
import Seasons from "@/components/Details/Seasons";

export const AnimeControl = ({
  anime,
  episodeid,
  episodes,
}: {
  anime: AnilistInfo;
  episodeid: string;
  episodes: any;
}) => {
  const getCurrentEpisode = () => {
    if (episodeid && episodes && episodes.length > 0) {
      return episodes.find((ep: any) => ep.id === episodeid);
    } else {
      return anime.episodes.find((ep: any) => ep.id === episodeid);
    }
  };

  return (
    <div className="h-full rounded-lg flex gap-2 flex-col w-full">
      <div className="flex flex-col md:flex-row  h-[40%] gap-2 flex-grow ">
        <div className="md:w-[40%] w-full rounded-lg flex flex-col p-4 justify-center items-center gap-4 bg-[#222222] ">
          <div>
            You are currently watching
            <span className="font-bold text-gray-100 bg-purple-500 p-1 ml-2 rounded-md">
              Episode {getCurrentEpisode()?.number}
            </span>
          </div>

          <p className="italic text-sm text-gray-500">
            (If current server doesn't work please try other servers beside.)
          </p>
        </div>

        <div className="md:w-[60%] w-full rounded-lg bg-[#222222] ">
          <AnimeProviders />
        </div>
      </div>
      <div className="h-[60%]   rounded-lg bg-[#222222] ">
        {" "}
        <Seasons animeData={anime} showHeader={false} />
      </div>
    </div>
  );
};
