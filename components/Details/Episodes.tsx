import { ScrollArea } from "@/components/ui/scroll-area";

import { useGetEpisodes } from "@/lib/react-query/queriesAndMutations";
import { AnilistInfo } from "@/lib/types/info";
import { EpisodesItem } from "./EpisodesItem";


function Episodes({ info, id }: { info: AnilistInfo; id: string }) {
  const { data, isFetching, error } = useGetEpisodes({ id });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-2 ">
        {/* <h4 className="my-3 text-lg  text-center font-medium leading-none">
          Episodes
        </h4> */}
        {data.map((ep: any, i: any) => (
          <>
            <EpisodesItem info={info} key={i} episode={ep} />
            {/* <Separator /> */}
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

export default Episodes;
