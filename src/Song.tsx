import React from "react";

interface SongProps {
  artist: string;
  song: string;
  year: string;
}

export const Song: React.FC<SongProps> = ({ artist, song, year }) => (
  <li className="m-0 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
    {/* Mobile layout: stacked */}
    <div className="sm:hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-blue-600 text-sm">{artist}</span>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {year}
        </span>
      </div>
      <div className="text-gray-800 font-medium">{song}</div>
    </div>

    {/* Desktop layout: horizontal */}
    <div className="hidden sm:flex sm:items-center sm:gap-3">
      <span className="font-semibold text-blue-600 min-w-0 flex-shrink">{artist}</span>
      <span className="text-gray-400 flex-shrink-0">-</span>
      <span className="text-gray-800 min-w-0 flex-grow truncate">{song}</span>
      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex-shrink-0">
        {year}
      </span>
    </div>
  </li>
);