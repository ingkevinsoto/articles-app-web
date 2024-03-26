import React from 'react';
import '../styles.css'; 

const ArticleList = ({ articles }) => {
    {console.log(articles)}
  return (
    <div className="article-list-container">
      {articles.map(article => (
        <div key={article.id} className="article-item">
          <h3 className="article-title">{article.title}</h3> 
          <p className="article-content">{article.content}</p> 
          <img src={article.image_url} alt="Article" className="article-image" />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
