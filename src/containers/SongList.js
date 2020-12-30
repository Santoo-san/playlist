import React from "react";
import List from "../components/List/List";

const SongList = ({ songs, handleClickEmptySongList }) => {
  return (
    <React.Fragment>
      <List readonly={true} items={songs} />
      <button className="button-primary" onClick={handleClickEmptySongList}>
        Verwijder lijst
      </button>
    </React.Fragment>
  );
};

export default SongList;
