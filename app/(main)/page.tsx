import { MaxWidthWrapper } from "@/components/Shared/MaxWidthWrapper";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <MaxWidthWrapper className="h-screen">
      <Link
        href="/home"
        className="flex justify-center items-center h-full "
      >
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md" >Home</button>
      </Link>
    </MaxWidthWrapper>
  );
};

export default Page;
