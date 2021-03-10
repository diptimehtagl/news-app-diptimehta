import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NewsCard from "./NewsCard";
import { newsUrl } from "../../constants/newsUrl";
export const NewsDashboard = () => {
  let [news, setnews] = useState([]);
  useEffect(() => {
    fetch(newsUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setnews(data.articles);
      });
  }, []);
  return (
    <div>
      <center>
        <h1>News</h1>
      </center>
      <div className="row">
        <div className="col">
          {news.map((item) => (
            <NewsCard newsItem={item} />
          ))}
        </div>
      </div>
      <Loader
        type="TailSpin"
        color="black"
        height={100}
        width={100}
        timeout={5000} //3 secs
        className="loader"
      />
    </div>
  );
};
