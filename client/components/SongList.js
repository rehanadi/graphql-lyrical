import React from "react";
import gql from 'graphql-tag'
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  const renderSongs = () => {
    return data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  };

  if (data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="collection">
      {renderSongs()}
    </ul>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);