import React from "react";
import "./HeadlineCard.css";
export const HeadlineCard = (props) => {
  return (
    <div>
      <article class="headlineCard">
        <header>
          <center>
            <h1>{props.headline.title}</h1>
          </center>
        </header>
        <img
          src={props.headline.urlToImage}
          className="headlineCardImage"
          alt="covaxin"
        />
        <div class="content">
          <p>{props.headline.description}</p>
          <button className="readMore">
            <a href={props.headline.url}>ReadMore</a>
          </button>
        </div>
      </article>
    </div>
  );
};
