import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";
import SearchBar from "./SearchBar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const YOUR_API_KEY = "b740a19a81574ceaa1751ff82d53c495";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=b740a19a81574ceaa1751ff82d53c495`
        );
        setArticles(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [searchTerm]);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ul>
        {articles.map((article) => (
          <NewsArticle key={article.url} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default App;
