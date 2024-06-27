import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const response = await fetch(`${BASE_URL}/meta/anilist/info/${id}`);
  const data = await response.json();

  return new NextResponse(JSON.stringify(data));
}
