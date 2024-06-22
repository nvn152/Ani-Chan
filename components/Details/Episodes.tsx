import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import EpisodesItem from "./EpisodesItem";
import { useGetEpisodes } from "@/lib/react-query/queriesAndMutations";
import { useState } from "react";

function Episodes({ info, id }: { info: any; id: string }) {
  const { data, isFetching, error } = useGetEpisodes({ id });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="p-2 ">
        <h4 className="my-3 text-lg  text-center font-medium leading-none">
          Episodes
        </h4>
        {data.map((ep: any, i: any) => (
          <>
            <EpisodesItem key={i} episode={ep} />
            {/* <Separator /> */}
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

export default Episodes;
