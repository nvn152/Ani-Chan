import { Chip } from "@nextui-org/chip";
import { Providers } from "@/lib/utils";

export const AnimeProviders = () => {
  return (
    <div className="flex justify-start items-center p-4 h-full w-full">
      <table className="flex flex-col gap-auto">
        <tr className="flex justify-start items-center">
          <th className="pr-4">SUB</th>
          <td className="flex flex-wrap gap-2">
            {Providers.map((provider, i) => (
              <Chip key={i}>{provider.name}</Chip>
            ))}
          </td>
        </tr>
        <tr className="flex justify-start items-center">
          <th className="pr-4">DUB</th>
          <td className="flex flex-wrap gap-2">
            {Providers.map((provider, i) => (
              <Chip key={i}>{provider.name}</Chip>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
};
