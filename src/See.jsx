import React from "react";
import { firebaseApp } from "./firebase";
import { Song } from "./Song";
import TextFilter from "./TextFilter";
import styled from "styled-components";

const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

export class See extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      activeSongs: []
    };

    this.handleTextFilterChange = this.handleTextFilterChange.bind(this);
  }

  componentDidMount() {
    let ref = firebaseApp.database().ref("songs");

    ref.once("value", snapshot => {
      this.setState({
        songs: Object.values(snapshot.val()),
        activeSongs: Object.values(snapshot.val())
      });
    });
  }

  handleTextFilterChange(filter) {
    const lowerCaseFilter = filter.toLowerCase();

    if (filter === "") {
      this.setState({
        activeSongs: this.state.songs
      });
    } else {
      this.setState({
        activeSongs: this.state.songs.filter(
          ({ artist, song, year }) =>
            artist.toLowerCase().includes(lowerCaseFilter) ||
            song.toLowerCase().includes(lowerCaseFilter) ||
            year.toLowerCase().includes(lowerCaseFilter)
        )
      });
    }
  }

  render() {
    const songs = this.state.activeSongs.map(song => (
      <Song key={song.artist + song.song + song.year} {...song} />
    ));

    return (
      <div>
        <h1>Musikkjulekalender - Oversikt</h1>
        <TextFilter onChange={this.handleTextFilterChange} />
        <UnorderedList>{songs}</UnorderedList>
      </div>
    );
  }
}
