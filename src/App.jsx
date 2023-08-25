import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";
import SearchBar from "./SearchBar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&page_size=5&page=1&lang=en&when=24h`,
          {
            headers: {
              "x-api-key": "dd4v3o7ubqKAGX6mAjasCuHN9GBahGXJUwqTYW29Xzc",
            },
          }
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
