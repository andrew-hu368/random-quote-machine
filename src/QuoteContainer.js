import React from "react";
import "./App.css";
import Quote from "./Quote";
import ButtonsContainer from "./ButtonsContainer";

function QuoteContainer(props) {
  return (
    <div className="quote-container" id="quote-box">
      <Quote quote={props.quote} author={props.author} color={props.color} />
      <ButtonsContainer
        quote={props.quote}
        author={props.author}
        color={props.color}
        getNewQuote={props.getNewQuote}
      />
    </div>
  );
}

export default QuoteContainer;
