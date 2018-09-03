import React from "react";

export const Song = props => {
  console.log(props);
  const { artist, song, year } = props;
  return (
    <li>
      {artist} - {song} ({year})
    </li>
  );
};
