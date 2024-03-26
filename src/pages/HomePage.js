import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/articles');
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleArticleClick = async (articleId) => {
    try {
      const response = await axios.get(`http://localhost:5000/articles/${articleId}`);
      setSelectedArticle(response.data.article);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  return (
    <div>
      <h1>Published Articles</h1>
      <ArticleList articles={articles} onArticleClick={handleArticleClick} />
      {selectedArticle && <Article {...selectedArticle} />}
    </div>
  );
};

export default HomePage;
