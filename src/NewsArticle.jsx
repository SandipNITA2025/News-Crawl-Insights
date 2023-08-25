import React from "react";

const NewsArticle = ({ article }) => {
  return (
    <li>
      <img width="300" src={article.urlToImage} alt="" />
      <h2>{article.title}</h2>
      <p>{article.publishedAt}</p>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </li>
  );
};

export default NewsArticle;
