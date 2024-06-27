"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import {
  fetchData,
  fetchAnimeDetails,
  fetchEpisodes,
  fetchStreamingLinks,
} from "./queryFunctions";

//HOME PAGE DATA
export const useGetHomePageData = ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  return useQuery({
    queryKey: ["anv"],
    queryFn: () => fetchData({ page: page, perPage: perPage }),
  });
};

//ANIME DETAILS
export const useGetAnimeDetails = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ANIME_DETAILS, id],
    queryFn: () => fetchAnimeDetails({ id }),
  });
};

//FETCH ALL EPISODES
export const useGetEpisodes = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_EPISODES, id],
    queryFn: () => fetchEpisodes({ id }),
    enabled: !!id,
  });
};

//STREAMING LINKS
export const useGetStreamingLinks = ({
  id,
  provider,
}: {
  id: string;
  provider?: string;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_STREAMING_LINKS, id],
    queryFn: () => fetchStreamingLinks({ id, provider }),
    enabled: !!id,
  });
};
