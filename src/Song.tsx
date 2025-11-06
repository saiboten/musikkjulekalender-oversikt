import React from "react";

interface SongProps {
  artist: string;
  song: string;
  year: string;
}

export const Song: React.FC<SongProps> = ({ artist, song, year }) => (
  <li className="m-0 mt-2.5 p-3 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2">
      <span className="font-semibold text-blue-600">{artist}</span>
      <span className="text-gray-400">-</span>
      <span className="text-gray-800">{song}</span>
      <span className="ml-auto text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
        {year}
      </span>
    </div>
  </li>
);