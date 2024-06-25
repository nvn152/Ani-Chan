import { FaPlay, FaStar, FaClock } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnilistInfo } from "@/lib/types/info";

interface HomeCarouselProps {
  data: AnilistInfo[];
  loading?: boolean;
  error?: string | null;
}

export const HomeCarousel = ({
  data = [],
  loading,
  error,
}: HomeCarouselProps) => {
  const router = useRouter();

  const handlePlayButtonClick = (id: string) => {
    router.push(`/details/${id}`);
  };

  const truncateTitle = (title: string, maxLength: number = 40): string => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  const validData = data.filter(
    (item) =>
      item.title &&
      item.title.english &&
      item.description &&
      item.cover !== item.image
  );

  return (
    <>
      {loading || error ? (
        <div>Loadingg</div>
      ) : (
        <div className="relative ">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            // pagination={{
            //   el: ".swiper-pagination",
            //   clickable: true,
            //   dynamicBullets: true,
            //   type: "bullets",
            // }}
            // freeMode={false}
            // virtual={true}
            // grabCursor={true}
            // keyboard={true}
            centeredSlides={true}
            className="max-w-full h-96 rounded-lg cursor-grab"
          >
            {validData.map(
              ({
                id,
                cover,
                title,
                description,
                rating,
                totalEpisodes,
                duration,
                type,
                color,
                status,
              }) => (
                <SwiperSlide
                  key={id}
                  className="relative flex justify-start items-center"
                >
                  <div className="relative  w-full h-full rounded-lg">
                    <Image
                      fill
                      src={cover}
                      alt={title.english || title.romaji + " Banner Image"}
                      className="w-full h-full object-cover rounded-lg absolute"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent rounded-lg z-10"></div>
                    <div className="absolute left-8 bottom-6 z-20 max-w-lg">
                      <h3 className="line-clamp-1 max-w-[15%]">
                        {title.native}
                      </h3>

                      <h2
                        style={{ color: color ?? "pink" }}
                        className=" text-2xl md:text-5xl font-bold mb-2"
                      >
                        {truncateTitle(title.english)}
                      </h2>
                      <div className="flex gap-3 text-white text-sm mb-2">
                        {type && (
                          <p className="flex items-center">
                            <TbCards />
                            {type}
                          </p>
                        )}
                        {totalEpisodes && (
                          <p className="flex items-center">
                            <TbCards />
                            {totalEpisodes}
                          </p>
                        )}
                        {rating && (
                          <p className="flex items-center">
                            <FaStar />
                            {rating}
                          </p>
                        )}
                        {duration && (
                          <p className="flex items-center">
                            <FaClock />
                            {duration} mins
                          </p>
                        )}

                        {status && (
                          <h1
                            className="uppercase font-bold"
                            style={{ color: color ?? "pink" }}
                          >
                            {status}
                          </h1>
                        )}
                      </div>
                      <p
                        className="text-white text-sm max-h-20 overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                    <div className="absolute right-8 bottom-6 z-20 flex items-center">
                      <button
                        onClick={() => handlePlayButtonClick(id)}
                        className="flex items-center gap-2 text-white font-bold py-4 px-4 rounded bg-[#F9FAFB]/10 transition-transform transform hover:scale-105 border-b-2 border-r-2 border-[#F9FAFB]/20"
                      >
                        <FaPlay />
                        <span>WATCH NOW</span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      )}
    </>
  );
};
