import { ScrollArea } from "@/components/ui/scroll-area";
import EpisodesItem from "@/components/Details/EpisodesItem";

export const NextEpisodes = ({
  episodes,
  episodeid,
  animeid,
}: {
  episodes: any;
  episodeid: string;
  animeid: string;
}) => {
  return <ScrollArea className="h-full w-full rounded-md border">
  <div className="p-2 ">
    <h4 className="my-3 text-lg  text-center font-medium leading-none">
      Episodes
    </h4>
    {episodes?.map((ep: any, i: any) => (
      <>
        <EpisodesItem episodeid={episodeid} animeid={animeid} key={i} episode={ep} />
        {/* <Separator /> */}
      </>
    ))}
  </div>
</ScrollArea>;
};
