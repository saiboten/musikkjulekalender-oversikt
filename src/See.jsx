import React from "react";
import { firebaseApp } from "./firebase";
import { Song } from "./Song";

export class See extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    let ref = firebaseApp.database().ref("songs");

    ref.once("value", snapshot => {
      this.setState({
        songs: Object.values(snapshot.val())
      });
    });
  }

  render() {
    const songs = this.state.songs.map(song => (
      <Song key={song.artist} {...song} />
    ));

    return <div>{songs}</div>;
  }
}
