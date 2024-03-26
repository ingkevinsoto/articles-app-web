import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/Article';

const ArticleDetailPage = ({ match }) => {
  const [article, setArticle] = useState(null);
  const articleId = match.params.id;

  useEffect(() => {
    fetchArticle();
  }, [articleId]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/articles/${articleId}`);
      setArticle(response.data.article);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  return (
    <div>
      {article ? <Article article={article} /> : <p>Loading...</p>}
    </div>
  );
};

export default ArticleDetailPage;
