const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

export const fetchTrendingAnime = async ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  const response = await fetch(
    `${BASE_URL}/meta/anilist/trending?perPage=${perPage}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchPopularAnime = async ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  const response = await fetch(
    `${BASE_URL}/meta/anilist/popular?perPage=${perPage}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchMostScoredAnime = async ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  const response = await fetch(
    `${BASE_URL}/meta/anilist/advanced-search?sort=["SCORE_DESC"]&page=${page}&perPage=${perPage}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchTopRatedAnime = async ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  const response = await fetch(
    `${BASE_URL}/meta/anilist/advanced-search?sort=["SCORE_DESC"]&perPage=${perPage}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Get ANIME Details

export const fetchAnimeDetails = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_URL}/meta/anilist/info/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// export const getEpisodes = async ({ id }: { id: string }) => {
//   const response = await fetch(`${BASE_URL}/api/episodes/${id}`);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };

export const fetchEpisodes = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_URL}/meta/anilist/episodes/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};


// CONSUMET API STREAMING LINKS

export const fetchStreamingLinks = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_URL}/meta/anilist/watch/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};