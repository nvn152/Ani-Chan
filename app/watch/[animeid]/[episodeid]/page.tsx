'use client'

import { NextPage } from "next";
import { useParams } from "next/navigation";

const Page: NextPage = () => {
  const { animeid, episodeid } = useParams<{
    animeid: string;
    episodeid: string;
  }>();

  return (
    <div className="mt-[4.5rem]">
      <h1>animeid : {animeid}</h1>
      <h1>episodeid : {episodeid}</h1>
    </div>
  );
};

export default Page;
