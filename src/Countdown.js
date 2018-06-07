import React, { Component } from "react";

class Countdown extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: "" };
    this.timer = 0;
  }

  setTargetTime = () => {
    console.log(this.refs.targetTime.value);
    let from = new Date().getTime() / 1000;
    let to = new Date(this.refs.targetTime.value).getTime() / 1000;
    let secs = to - from;
    this.setState(
      {
        seconds: secs
      },
      () => {
        if (this.timer == 0) {
          this.timer = setInterval(this.countdown, 1000);
        }
      }
    );
  };

  componentDidMount() {}

  countdown = () => {
    let seconds = this.state.seconds - 1;
    if (seconds <= 0) {
      clearInterval(this.timer);
    }
    this.setState({
      seconds: seconds,
      time: this.setTime(seconds)
    });
  };

  setTime = secs => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };

    return obj;
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Target time</label>
          {this.state.target}
          <input type="text" ref="targetTime" className="form-control" />
        </div>
        <button onClick={this.setTargetTime}>Start</button>
        h: {this.state.time.h} m: {this.state.time.m} s: {this.state.time.s}
      </div>
    );
  }
}

export default Countdown;
