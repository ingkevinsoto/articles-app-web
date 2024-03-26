import React from "react";

const Article = ({ id, title, content, imageUrl, author }) => {
  return (
    <div>

      <h3>{title}</h3>
 
      <p>{content}</p>
      <img src={imageUrl} alt="Article" style={{ maxWidth: "100%" }} />
      <p>Author: {author}</p>
    </div>
  );
};

export default Article;
