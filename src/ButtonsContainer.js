import React from "react";

export default function ButtonsContainer(props) {
  const quoteButton = {
    height: "38px",
    padding: "8px 18px 6px 18px",
    borderRadius: "3px",
    border: 0,
    color: "white",
    backgroundColor: props.color,
    marginTop: "15px",
    float: "right",
    display: "inline-block"
  };
  const tweetBtutton = {
    display: "inline-block",
    padding: "10px 20px 8px 20px",
    borderRadius: "3px",
    border: 0,
    color: "white",
    backgroundColor: props.color,
    marginTop: "15px",
    textDecoration: "none"
  };

  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${
          props.quote
        }%22%20${props.author}`}
        style={tweetBtutton}
        id="tweet-quote"
      >
        Tweet
      </a>
      <button
        href="#"
        style={quoteButton}
        onClick={props.getNewQuote}
        id="new-quote"
      >
        New Quote
      </button>
    </div>
  );
}
