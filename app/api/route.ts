import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const perPage = request.nextUrl.searchParams.get("perPage");

  // Define the URLs for the additional endpoints
  const url1 = `${BASE_URL}/meta/anilist/advanced-search?sort=["SCORE_DESC"]&page=${page}&perPage=${perPage}`;
  const url2 = `${BASE_URL}/meta/anilist/trending?perPage=${perPage}&page=${page}`; // Replace with actual endpoint and parameters
  const url3 = `${BASE_URL}/meta/anilist/popular?perPage=${perPage}&page=${page}`; // Replace with actual endpoint and parameters

  try {
    // Perform concurrent requests using Promise.all
    const [response1, response2, response3] = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
    ]);

    // Check if all responses are OK
    if (!response1.ok || !response2.ok || !response3.ok) {
      throw new Error("One or more requests failed");
    }

    // Parse the responses as JSON
    const mostScored = await response1.json();
    const trendingAnime = await response2.json();
    const popularAnime = await response3.json();

    // Combine the responses into a single object or array
    const combinedData = {
      mostScored,
      trendingAnime,
      popularAnime,
    };

    // Return the combined data as the response
    return new NextResponse(JSON.stringify(combinedData), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching data:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
