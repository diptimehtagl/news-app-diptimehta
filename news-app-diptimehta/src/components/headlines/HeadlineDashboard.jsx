import React, { useState, useEffect } from "react";
import NewsCard from "../news/NewsCard";
import { HeadlineCard } from "./HeadlineCard";
import { fetchHeadlineApi } from "../../services/fetchNews";
export const HeadlineDashboard = () => {
  let [headline, setHeadline] = useState([]);

  useEffect(() => {
    fetchHeadlineApi().then((data) => {
      setHeadline(data.articles);
    });
  }, []);

  return headline.length === 0 ? (
    <img
      src="https://codemyui.com/wp-content/uploads/2015/09/spinner-loader-animation.gif"
      alt="loading..."
    />
  ) : (
    <div>
      <HeadlineCard headlineItem={headline[0]} />
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
