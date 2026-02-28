import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles, onClickRemove }) {
  return (
    <section className="articles-section">
      <h2 style={{ margin: "0 0 1rem", fontSize: "1.1rem", color: "rgba(255,255,255,0.7)" }}>
        List
      </h2>
      {articles.length === 0 ? (
        <p className="empty-state">No articles yet. Add one above.</p>
      ) : (
        <ul className="article-list">
          {articles.map((a) => (
            <ArticleItem key={a.id} article={a} onClickRemove={onClickRemove} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ArticleList;
