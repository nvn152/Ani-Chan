import { ScrollArea } from "@/components/ui/scroll-area";

import { useGetEpisodes } from "@/lib/react-query/queriesAndMutations";
import { AnilistInfo } from "@/lib/types/info";
import { EpisodesItem } from "./EpisodesItem";

function Episodes({ info, id }: { info: AnilistInfo; id: string }) {
  const { data, isFetching } = useGetEpisodes({ id });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-2 ">
        {data && data.length > 0
          ? data.map((ep: any, i: any) => (
              <>
                <EpisodesItem info={info} key={i} episode={ep} />
                {/* <Separator /> */}
              </>
            ))
          : info.episodes.map((ep: any, i: any) => (
              <EpisodesItem info={info} key={i} episode={ep} />
            ))}
      </div>
    </ScrollArea>
  );
}

export default Episodes;
