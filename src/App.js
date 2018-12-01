import React, { Component } from "react";
import "./App.css";
import QuoteContainer from "./QuoteContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    this.getNewQuote();
  }

  generateColor() {
    const r = this.randomRGB();
    const g = this.randomRGB();
    const b = this.randomRGB();
    return `rgb(${r}, ${g}, ${b})`;
  }

  randomRGB() {
    return Math.round(Math.random() * 255);
  }

  getQuote() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          quote: data.quote,
          author: `- ${data.author}`
        });
      });
  }

  getNewQuote() {
    this.getQuote();
    const color = this.generateColor();
    this.setState({ color: color });
  }

  render() {
    const bgColor = { background: this.state.color };
    return (
      <div className="app" style={bgColor}>
        <QuoteContainer
          quote={this.state.quote}
          author={this.state.author}
          color={this.state.color}
          getNewQuote={this.getNewQuote.bind(this)}
        />
      </div>
    );
  }
}

export default App;
