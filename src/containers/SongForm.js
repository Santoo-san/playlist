import React from "react";
import List from "../components/List/List";
import InputField from "../components/InputField";

const SongForm = ({ songs, sortfunction, addSong }) => {
  return (
    <React.Fragment>
      <InputField onSubmit={addSong} />
      <List items={songs} handleClickItem={sortfunction} />
    </React.Fragment>
  );
};

export default SongForm;
