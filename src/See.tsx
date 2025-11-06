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
    <div>
      <h1 className="text-2xl font-bold mb-4">Musikkjulekalender - Oversikt</h1>
      <TextFilter onChange={handleTextFilterChange} />
      <ul className="list-none m-0 mt-5 p-0">{songElements}</ul>
    </div>
  );
};