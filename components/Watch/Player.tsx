import { FC } from "react";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
  DefaultAudioLayout,
} from "@vidstack/react/player/layouts/default";

export const Player = ({ data }: { data: any }) => {
  return (
    <div className="player">
      <MediaPlayer
        className="h-full w-full"
        title="Sprite Fight"
        src={data?.sources[3].url}
        aspectRatio={`16 / 9`}
      >
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
        <MediaProvider />
        <DefaultAudioLayout icons={defaultLayoutIcons} />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};
