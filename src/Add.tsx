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
    <div className="w-full max-w-md mx-auto">
      {/* Header with navigation */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center sm:text-left">
          Legg til ny sang
        </h1>
        <a
          href="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 text-sm font-medium"
        >
          ← Tilbake til oversikt
        </a>
      </div>

      {/* Form */}
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="artist" className="block text-sm font-medium text-gray-700">
            Artist
          </label>
          <input
            id="artist"
            value={artist}
            onChange={updateArtist}
            autoComplete="off"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Skriv inn artistnavn..."
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="song" className="block text-sm font-medium text-gray-700">
            Sang
          </label>
          <input
            autoComplete="off"
            id="song"
            value={song}
            onChange={updateSong}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Skriv inn sangtittel..."
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            År
          </label>
          <input
            autoComplete="off"
            id="year"
            value={year}
            onChange={updateYear}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="f.eks. 2023"
          />
        </div>

        {submitButton && (
          <button 
            type="submit" 
            className="w-full mt-6 px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Legg til sang
          </button>
        )}
      </form>
    </div>
  );
};