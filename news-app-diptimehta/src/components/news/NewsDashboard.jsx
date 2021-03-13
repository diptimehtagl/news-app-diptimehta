import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NewsCard from "./NewsCard";
import { fetchNewsApi } from "../../services/fetchNews";
export const NewsDashboard = () => {
  let [news, setnews] = useState([]);
  useEffect(() => {
    fetchNewsApi().then((data) => {
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
