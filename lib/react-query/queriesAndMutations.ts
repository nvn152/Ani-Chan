"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import {
  fetchAnimeDetails,
  fetchEpisodes,
  fetchMostScoredAnime,
  fetchPopularAnime,
  fetchStreamingLinks,
  fetchTopRatedAnime,
  fetchTrendingAnime,
} from "@/lib/api/api";

export const useGetTrendingAnime = ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_TRENDING_ANIME],
    queryFn: () => fetchTrendingAnime({ perPage, page }),
  });
};

export const useGetPopularAnime = ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_POPULAR_ANIME],
    queryFn: () => fetchPopularAnime({ perPage, page }),
  });
};

export const useGetMostScoredAnime = ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_MOST_SCORED_ANIME],
    queryFn: () => fetchMostScoredAnime({ page: page, perPage: perPage }),
  });
};

export const useGetTopRatedAnime = ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_TOP_RATED_ANIME],
    queryFn: () => fetchTopRatedAnime({ perPage, page }),
  });
};

export const useGetAnimeDetails = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ANIME_DETAILS, id],
    queryFn: () => fetchAnimeDetails({ id }),
  });
};

// export const useGetEpisodes = ({ id }: { id: string }) => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.GET_EPISODES, id],
//     queryFn: () => getEpisodes({ id }),
//     enabled: !!id,
//   });
// };

export const useGetEpisodes = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_EPISODES, id],
    queryFn: () => fetchEpisodes({ id }),
    enabled: !!id,
  });
};

export const useGetStreamingLinks = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_STREAMING_LINKS, id],
    queryFn: () => fetchStreamingLinks({ id }),
    enabled: !!id,
  });
};