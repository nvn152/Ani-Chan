import Image from "next/image";
import Link from "next/link";

function EpisodesItem({ episode }: { episode: any }) {
  console.log(episode);

  return (
    <Link
      href={`/watch/episodes/${episode.id}`}
      className="my-2 p-2 rounded-lg cursor-pointer hover:ring-1  h-full w-full hover:scale-105 transition flex bg-[#222222;]"
    >
      <div>
        <Image
          className="rounded-lg"
          src={episode.image}
          alt={episode.title}
          width={150}
          height={300}
        />
      </div>
      <div className="ml-5 flex flex-col ">
        <h1 className="text-lg font-bold">EPISODE: {episode.number}</h1>
        <p className="text-sm italic">{episode.title}</p>
        <p className="text-xs ">{episode.createdAt}</p>
      </div>
    </Link>
  );
}

export default EpisodesItem;
