import React from "react";
import { nanoid } from "nanoid";
import SongForm from "./containers/SongForm";
import SongList from "./containers/SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      //sortState?: "",
      songs: [
        {
          id: "bgzNP",
          Song: "Sabotage",
          Artist: "Beastie Boys",
          Genre: "HipHop",
          Rating: "5",
        },
        {
          id: "xV1UZ",
          Song: "Fight For Your Right",
          Artist: "Beastie Boys",
          Genre: "HipHop",
          Rating: "4",
        },
        {
          id: "zpRU4",
          Song: "Intergalactic",
          Artist: "Beastie Boys",
          Genre: "HipHop",
          Rating: "3",
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    const item = { id: nanoid(5), ...song };
    this.setState({ songs: this.state.songs.concat(item) });
  };

  // const handleClickSort = () => {
  //   //doe iets om de click te handelen
  // };

  emptyList = () => {
    this.setState({ songs: [] });
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <table className="song-table">
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
          <SongList
            addSong={this.addSong}
            handleClickEmptySongList={this.emptyList}
            songs={this.state.songs}
          />
        </table>
      </div>
    );
  }
}

export default SongOverview;
