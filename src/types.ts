// Type definitions for the Music Calendar project

export interface SongData {
  artist: string;
  song: string;
  year: string;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}

export interface AddState {
  artist: string;
  song: string;
  year: string;
}

export interface SeeState {
  songs: SongData[];
  activeSongs: SongData[];
}

export interface TextFilterProps {
  onChange: (value: string) => void;
}

export interface TextFilterState {
  text: string;
}

export interface SongProps {
  artist: string;
  song: string;
  year: string;
}