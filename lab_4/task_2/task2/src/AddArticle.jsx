import React from "react";

function AddArticle({ name, title, summary, onChangeTitle, onChangeSummary, onClickAdd }) {
  return (
    <section className="articles-section">
      <h1>{name}</h1>
      <div className="add-form">
        <input
          placeholder="Article title"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          placeholder="Summary"
          value={summary}
          onChange={onChangeSummary}
        />
        <button type="button" onClick={onClickAdd}>Add article</button>
      </div>
    </section>
  );
}

export default AddArticle;