import React, { useState, useEffect } from "react";
import NewsCard from "../news/NewsCard";
import { HeadlineCard } from "./HeadlineCard";
import { headlineUrl } from "../../constants/newsUrl";
export const HeadlineDashboard = () => {
  let [headline, setHeadline] = useState([]);

  useEffect(() => {
    fetch(headlineUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setHeadline(data.articles);
      });
  }, []);
  console.log(headline);
  return headline.length === 0 ? (
    <img
      src="https://codemyui.com/wp-content/uploads/2015/09/spinner-loader-animation.gif"
      alt="loading..."
    />
  ) : (
    <div>
      <HeadlineCard headline={headline[0]} />
      <div className="row">
        <div className="col">
          {headline.map((item) => (
            <NewsCard newsItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
