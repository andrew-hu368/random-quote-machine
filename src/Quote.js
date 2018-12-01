import React from "react";

function Quote(props) {
  const textColor = { color: props.color };
  const quoteFont = { fontWeight: 700, fontSize: "1.75em" };
  const authorStyle = { textAlign: "right", marginTop: "15px" };
  return (
    <div style={textColor}>
      <div style={quoteFont} id="text">
        {props.quote}
      </div>
      <div style={authorStyle} id="author">
        {props.author}
      </div>
    </div>
  );
}

export default Quote;
