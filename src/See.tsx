import React, { useState, useEffect, useMemo } from "react";
import { firebaseApp } from "./firebase";
import { Song } from "./Song";
import TextFilter from "./TextFilter";

interface SongData {
  artist: string;
  song: string;
  year: string;
}

export const See: React.FC = () => {
  const [songs, setSongs] = useState<SongData[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const ref = firebaseApp.database().ref("songs");

    ref.once("value", (snapshot: any) => {
      const data = snapshot.val();
      if (data) {
        const songsArray: SongData[] = Object.values(data);
        setSongs(songsArray);
      }
    });
  }, []);

  const activeSongs = useMemo((): SongData[] => {
    if (!filter) {
      return songs;
    }

    const lowerCaseFilter = filter.toLowerCase();
    return songs.filter(
      ({ artist, song, year }: SongData) =>
        artist.toLowerCase().includes(lowerCaseFilter) ||
        song.toLowerCase().includes(lowerCaseFilter) ||
        year.toLowerCase().includes(lowerCaseFilter)
    );
  }, [songs, filter]);

  const handleTextFilterChange = (newFilter: string): void => {
    setFilter(newFilter);
  };

  const songElements = activeSongs.map((song: SongData) => (
    <Song key={`${song.artist}-${song.song}-${song.year}`} {...song} />
  ));

  return (
    <div className="w-full">
      {/* Header with navigation */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center sm:text-left">
          Musikkjulekalender - Oversikt
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <TextFilter onChange={handleTextFilterChange} />
          <a
            href="/add"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full sm:w-auto text-center"
          >
            Legg til ny sang
          </a>
        </div>
      </div>

      {/* Songs list */}
      <div className="mb-4 text-sm text-gray-600">
        Viser {activeSongs.length} av {songs.length} sanger
      </div>
      <ul className="list-none m-0 p-0 space-y-2 sm:space-y-3">{songElements}</ul>
    </div>
  );
};