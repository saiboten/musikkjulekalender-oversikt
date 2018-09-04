import React from "react";
import styled from "styled-components";

const ListElement = styled.li`
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

export const Song = ({ artist, song, year }) => (
  <ListElement>
    <strong>{artist}</strong> - {song} ({year})
  </ListElement>
);
