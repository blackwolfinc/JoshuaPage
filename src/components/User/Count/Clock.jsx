import React, { Component } from "react";
import "./Clock.scss"
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {

    const time = Date.parse(deadline) - Date.parse(new Date());
   
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className="Clock-Container">
      <div className="Clock-wrap">
        <div className="CLC Clock-days">
        <h1> {this.leading0(this.state.days)} Da<span className="text-green">y</span>s</h1> 
        </div>
      
        </div>
         <div className="Clock-wrap2">
         <div className="CLC Clock-hours">
        <h1>  {this.leading0(this.state.hours)} Hours</h1>
        </div>
        <div className="CLC Clock-minutes">
        <h1>    {this.leading0(this.state.minutes)} Minutes</h1>
        </div>
        <div className="CLC Clock-seconds">
        <h1>   {this.leading0(this.state.seconds)} Seconds</h1>
        </div>
        </div>
      </div>
    );
  }
}
export default Clock;
