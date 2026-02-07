import React, { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import "./ArticleManager.css";

function ArticleManager() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onClickAdd = () => {
    if (!title.trim() || !summary.trim()) return;

    const newArticle = {
      id: Date.now(),
      title: title.trim(),
      summary: summary.trim(),
    };

    setArticles([...articles, newArticle]);
    setTitle("");
    setSummary("");
  };

  const onClickRemove = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  return (
    <div className="article-manager">
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </div>
  );
}

export default ArticleManager;
