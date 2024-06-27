import { ScrollArea } from "@/components/ui/scroll-area";
import { EpisodesItem } from "@/components/Details/EpisodesItem";
import { AnilistInfo } from "@/lib/types/info";

export const NextEpisodes = ({
  episodes,
  episodeid,
  animeid,
  anime,
  isFetchingEpisodes,
}: {
  episodes: any;
  episodeid: string;
  animeid: string;
  anime: AnilistInfo;
  isFetchingEpisodes: boolean;
}) => {
  if (isFetchingEpisodes) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className="h-[calc(100vh-5rem)] w-full overflow-auto rounded-md border">
      <div className="p-2 ">
        {/* <h4 className="my-3 text-lg  text-center font-medium leading-none">
          Episodes
        </h4> */}
        {episodes.legth > 0
          ? episodes.map((ep: any, i: any) => (
              <>
                <EpisodesItem
                  episodeid={episodeid}
                  animeid={animeid}
                  key={i}
                  episode={ep}
                />
                {/* <Separator /> */}
              </>
            ))
          : anime.episodes.map((ep: any, i: any) => (
              <EpisodesItem
                episodeid={episodeid}
                animeid={animeid}
                key={i}
                episode={ep}
              />
            ))}
      </div>
    </ScrollArea>
  );
};
