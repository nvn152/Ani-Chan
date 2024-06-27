import { FC } from "react";

export const AnimeControl: FC = () => {
  return (
    <div className="h-full rounded-lg flex gap-2 flex-col w-full">
      <div className="flex h-1/2 gap-2 flex-grow">
        <div className="w-2/3 rounded-lg bg-green-500">This is the left div</div>
        <div className="w-1/3 rounded-lg bg-yellow-500">This is the right div</div>
      </div>
      <div  className="h-1/2 rounded-lg bg-blue-500">Bottom div</div>
    </div>
  );
};
