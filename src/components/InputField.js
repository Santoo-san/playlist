import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Song: "",
      Artist: "",
      Genre: "",
      Rating: "",
    };
    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput = (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const newSongItem = {
      Song: this.state.Song,
      Artist: this.state.Artist,
      Genre: this.state.Genre,
      Rating: this.state.Rating,
    };
    console.log(newSongItem);
    this.props.onSubmit(newSongItem);
    this.setState({
      Song: "",
      Artist: "",
      Genre: "",
      Rating: "",
    });
  };

  render() {
    return (
      <form className="song-input" onSubmit={this.onSubmit}>
        <input
          name="Song"
          placeholder="Voer een titel in"
          type="search"
          onChange={this.onInput}
          value={this.state.Song}
          className="input-primary"
        ></input>
        <input
          name="Artist"
          placeholder="Voer een artiest in"
          type="search"
          onChange={this.onInput}
          value={this.state.Artist}
          className="input-secondary"
        ></input>
        <select name="Genre" value={this.state.Genre} onChange={this.onInput}>
          <option value="" disabled selected>
            Kies een genre
          </option>
          <option value="Dance">Dance</option>
          <option value="Rock">Rock</option>
          <option value="HipHop">HipHop</option>
          <option value="Pop">Pop</option>
        </select>
        <select name="Rating" value={this.state.Rating} onChange={this.onInput}>
          <option value="" disabled selected>
            Aantal sterren
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="button-primary" type="submit">
          Voeg toe
        </button>
      </form>
    );
  }
}

export default InputField;
