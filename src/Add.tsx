import React, { useState, ChangeEvent, FormEvent, useMemo } from "react";
import { firebaseApp } from "./firebase";

interface SongData {
  artist: string;
  song: string;
  year: string;
}

export const Add: React.FC = () => {
  const [artist, setArtist] = useState<string>("");
  const [song, setSong] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const updateArtist = (e: ChangeEvent<HTMLInputElement>): void => {
    setArtist(e.target.value);
  };

  const updateSong = (e: ChangeEvent<HTMLInputElement>): void => {
    setSong(e.target.value);
  };

  const updateYear = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(Number(e.target.value)) && e.target.value.length <= 4) {
      setYear(e.target.value);
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const db = firebaseApp.database();
    const songData: SongData = {
      artist,
      song,
      year
    };
    
    db.ref("songs").push(songData);

    // Reset form
    setArtist("");
    setSong("");
    setYear("");
  };

  const readyToSubmit = useMemo((): boolean => {
    return artist !== "" && year !== "" && song !== "";
  }, [artist, year, song]);

  const submitButton = readyToSubmit ? (
    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Legg til
    </button>
  ) : null;

  return (
    <form onSubmit={submit}>
      <div className="flex w-[300px] justify-between mb-2.5">
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={artist}
          onChange={updateArtist}
          autoComplete="off"
          className="border border-gray-300 px-2 py-1 rounded"
        />
      </div>
      <div className="flex w-[300px] justify-between mb-2.5">
        <label htmlFor="song">Song</label>
        <input
          autoComplete="off"
          id="song"
          value={song}
          onChange={updateSong}
          className="border border-gray-300 px-2 py-1 rounded"
        />
      </div>
      <div className="flex w-[300px] justify-between mb-2.5">
        <label htmlFor="year">Year</label>
        <input
          autoComplete="off"
          id="year"
          value={year}
          onChange={updateYear}
          className="border border-gray-300 px-2 py-1 rounded"
        />
      </div>
      {submitButton}
    </form>
  );
};