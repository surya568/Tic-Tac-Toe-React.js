import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Status from "./components/Status";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
    };
  }
  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newboard = this.state.board;
      if (this.state.board[index] === null && this.state.winner === null) {
        newboard[index] = this.state.player;
        this.setState({
          board: newboard,
          player: this.state.player === "X" ? "0" : "X",
        });
      }
    }
    this.checkwinner();
  }
  checkwinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        alert("WIN");
        this.setState({
          winner: this.state.board[a]
        })
      }
    }
  }

  setPlayer(player) {
    this.setState({
      player: player,
    });
  }
  resethandle() {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null,
    });
  }
  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">TIC TAC TOE</h1>
        <Status
          player={this.state.player}
          winner={this.state.winner}
          method={(e) => this.setPlayer(e)}
        />
        <div className="board">{this.renderBoxes()}</div>
        <br />
        <button className="reset" onClick={() => this.resethandle()}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
