import React from "react";
import { firebaseApp } from "./firebase";

export class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: "",
      song: "",
      year: ""
    };

    this.updateArtist = this.updateArtist.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateArtist(e) {
    this.setState({
      artist: e.target.value
    });
  }

  updateSong(e) {
    this.setState({
      song: e.target.value
    });
  }

  updateYear(e) {
    this.setState({
      year: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    const { artist, song, year } = this.state;

    let db = firebaseApp.database();
    db.ref("songs").push({
      artist,
      song,
      year
    });

    this.setState({
      artist: "",
      song: "",
      year: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Artist</label>
        <input value={this.state.artist} onChange={this.updateArtist} />
        <label>Song</label>
        <input value={this.state.song} onChange={this.updateSong} />
        <label>Year</label>
        <input value={this.state.year} onChange={this.updateYear} />
        <button type="submit">Legg til</button>
      </form>
    );
  }
}
