import { Component } from "react";

class Challenge extends Component {
  state = {
    count: 0,
    myTimer: null,
    bool: false,
  };

  handleClickStart = () => {
    this.setState({
      myTimer: setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000),
    });
    this.setState({
      bool: true,
    });
  };

  handleClickStop = () => {
    clearInterval(this.state.myTimer);
    this.setState({
      bool: false,
    });
  };

  handleClickReset = () => {
    clearInterval(this.state.myTimer);
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <p style={{ fontSize: "2em", padding: "0em 2em" }}>
          {this.state.count}
        </p>
        <button
          onClick={
            this.state.bool ? this.handleClickStop : this.handleClickStart
          }
          style={{ padding: "0.5em 2em" }}
        >
          {this.state.bool ? "stop" : "start"}
        </button>
        <button
          onClick={this.handleClickReset}
          style={{ padding: "0.5em 2em" }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Challenge;
