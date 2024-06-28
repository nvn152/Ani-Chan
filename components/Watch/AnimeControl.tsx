import { AnilistInfo } from "@/lib/types/info";
import { AnimeProviders } from "./AnimeProviders";

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
    if (episodeid && episodes.length > 0) {
      return episodes.find((ep: any) => ep.id === episodeid);
    } else {
      return anime.episodes.find((ep: any) => ep.id === episodeid);
    }
  };

  return (
    <div className="h-full rounded-lg flex gap-2 flex-col w-full">
      <div className="flex h-1/2 gap-2 flex-grow ">
        <div className="w-2/3 rounded-lg flex flex-col p-4 justify-center items-center gap-4 bg-[#222222] ">
          <div>
            You are currently watching{" "}
            <span className="font-bold ">
              Episode {getCurrentEpisode()?.number}
            </span>
          </div>

          <p className="italic text-sm text-gray-500">
            (If current server doesn't work please try other servers beside.)
          </p>
        </div>

        <div className="w-1/3 rounded-lg bg-[#222222] ">
          <AnimeProviders />
        </div>
      </div>
      <div className="h-1/2 rounded-lg bg-[#222222] ">Bottom div</div>
    </div>
  );
};
