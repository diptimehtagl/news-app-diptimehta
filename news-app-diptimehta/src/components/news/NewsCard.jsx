import React from "react";
import "./NewsCard.css";
export default function NewsCard({ newsItem }) {
  return (
    <div className="card">
      <div className="cardBody">
        <img className="cardImage" src={newsItem.urlToImage} alt="news" />
        <p className="cardTitle">{newsItem.title}</p>
        <p className="cardText">{newsItem.description}</p>
        <a href={newsItem.url}> readMore {`>>`} </a>
      </div>
    </div>
  );
}
