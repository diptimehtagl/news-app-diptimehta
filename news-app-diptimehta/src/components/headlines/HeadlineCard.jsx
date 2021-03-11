import React from "react";
import "./HeadlineCard.css";
export const HeadlineCard = ({ headlineItem }) => {
  return (
    <div>
      <article class="headlineCard">
        <header>
          <center>
            <h1>{headlineItem.title}</h1>
          </center>
        </header>
        <img
          src={headlineItem.urlToImage}
          className="headlineCardImage"
          alt="news_image"
        />
        <div class="content">
          <p>{headlineItem.description}</p>
          <button className="readMore">
            <a href={headlineItem.url}>ReadMore</a>
          </button>
        </div>
      </article>
    </div>
  );
};
