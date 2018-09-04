import React from "react";
import { firebaseApp } from "./firebase";
import styled from "styled-components";

const LabelSet = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

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
    this.readyToSubmit = this.readyToSubmit.bind(this);
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
    if (!isNaN(e.target.value) && e.target.value.length <= 4) {
      this.setState({
        year: e.target.value
      });
    }
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

  readyToSubmit() {
    const { artist, year, song } = this.state;
    return artist !== "" && year !== "" && song !== "";
  }

  render() {
    const submitButton = this.readyToSubmit() ? (
      <button type="submit">Legg til</button>
    ) : null;

    return (
      <form onSubmit={this.submit}>
        <LabelSet>
          <label htmlFor="artist">Artist</label>
          <input
            id="artist"
            value={this.state.artist}
            onChange={this.updateArtist}
            autoComplete="off"
          />
        </LabelSet>
        <LabelSet>
          <label htmlFor="song">Song</label>
          <input
            autoComplete="off"
            id="song"
            value={this.state.song}
            onChange={this.updateSong}
          />
        </LabelSet>
        <LabelSet>
          <label htmlFor="year">Year</label>
          <input
            autoComplete="off"
            id="year"
            value={this.state.year}
            onChange={this.updateYear}
          />
        </LabelSet>
        {submitButton}
      </form>
    );
  }
}
