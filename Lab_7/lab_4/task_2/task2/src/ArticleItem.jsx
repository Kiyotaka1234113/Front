import React, { useState } from "react";

function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <li className="article-item" style={{ flexWrap: "wrap" }}>
      <button
        type="button"
        className="article-item-title"
        onClick={toggle}
        aria-expanded={isOpened}
      >
        {article.title}
      </button>
      <button
        type="button"
        className="article-item-remove"
        onClick={() => onClickRemove(article.id)}
        aria-label="Remove article"
      >
        ×
      </button>
      {isOpened && (
        <p className="article-item-summary">{article.summary}</p>
      )}
    </li>
  );
}

export default ArticleItem;
