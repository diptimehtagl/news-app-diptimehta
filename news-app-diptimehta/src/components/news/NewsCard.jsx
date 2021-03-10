import React from "react";
import "./NewsCard.css";
export default function NewsCard(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img className="cardImage" src={props.newsItem.urlToImage} />
        <p className="cardTitle">{props.newsItem.title}</p>
        <p className="cardText">{props.newsItem.description}</p>
        <a href={props.newsItem.url}> readMore {`>>`} </a>
      </div>
    </div>
  );
}
