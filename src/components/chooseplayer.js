import React from "react";
class Player extends React.Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <form className="lab" onSubmit={(e) => this.handleForm(e)}>
        <label>
          player X<input type="radio" name="player" value="X"></input>
        </label>
        <label>
          player 0<input type="radio" name="player" value="0"></input>
        </label>
        <input type="submit" value="start"></input>
      </form>
    );
  }
}
export default Player;
