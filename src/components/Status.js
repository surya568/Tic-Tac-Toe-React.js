import React from "react";
import Player from "./chooseplayer";
class Status extends React.Component {
  handleSetPlayer(e) {
    this.props.method(e);
  }
  resethandle() {
    this.props.reset();
  }
  renderHtml() {
    if (this.props.winner) {
      return <h2>Winner is {this.props.winner}</h2>;
    } else {
      return this.props.player ? (
        <h2>Next player is {this.props.player}</h2>
      ) : (
        <Player player={(e) => this.handleSetPlayer(e)} />
      );
    }
  }
  render() {
    return <span>{this.renderHtml()}</span>;
  }
}
export default Status;
