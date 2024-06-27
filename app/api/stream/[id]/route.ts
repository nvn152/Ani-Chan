// import { NextRequest, NextResponse } from "next/server";

// const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const id = params.id;

//   const response = await fetch(`${BASE_URL}/anime/gogoanime/watch/${id}`);
//   const data = await response.json();

//   return new NextResponse(JSON.stringify(data));
// }

import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const url = new URL(request.url);
  const provider = url.searchParams.get("provider");

  console.log(provider);

  if (!provider) {
    return new NextResponse(
      JSON.stringify({ error: "Provider parameter is required" }),
      { status: 400 }
    );
  }

  try {
    let response;
    switch (provider) {
      case "gogoanime":
        response = await fetch(`${BASE_URL}/anime/gogoanime/watch/${id}`);
        break;
      case "anotherProvider":
        response = await fetch(`${BASE_URL}/anime/anotherProvider/watch/${id}`);
        break;
      case "yetAnotherProvider":
        response = await fetch(
          `${BASE_URL}/anime/yetAnotherProvider/watch/${id}`
        );
        break;
      default:
        return new NextResponse(JSON.stringify({ error: "Invalid provider" }), {
          status: 400,
        });
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch from ${provider}`);
    }

    const data = await response.json();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
