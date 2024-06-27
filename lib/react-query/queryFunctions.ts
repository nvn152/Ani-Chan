export const fetchData = async ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  const response = await fetch(`/api/?page=${page}&perPage=${perPage}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchAnimeDetails = async ({ id }: { id: string }) => {
  const response = await fetch(`/api/details/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

//FETCH EPISODES
export const fetchEpisodes = async ({ id }: { id: string }) => {
  const response = await fetch(`/api/episodes/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

// FETCH STREAMING LINK
export const fetchStreamingLinks = async ({
  id,
  provider,
}: {
  id: string;
  provider?: string;
}) => {
  const response = await fetch(`/api/stream/${id}?provider=${provider}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
