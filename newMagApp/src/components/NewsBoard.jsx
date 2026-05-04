import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "1bc6a9a5655b4939b2ecbe9783621b21";
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-center" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          articles.map((article, index) => {
            return <NewsItem key={index} article={article} />;
          })
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
