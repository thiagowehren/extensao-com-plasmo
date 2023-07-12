import React from "react";

export function Title() {
  return (
    <div className="title-container">
      <h2>
        <span>
          <a href="https://marginalrevolution.com/" target="_blank">
            Marginal Revolution
          </a>
        </span>
      </h2>
    </div>
  );
}

export function ToggleButton({ toggle, handleColorChange }) {
  return (
    <div className="toggle-button-cover button-cover">
      <input type="checkbox" id="switch" checked={toggle} onChange={handleColorChange} />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}

export function AddArticle({ handleAddArticle }) {
  return (
    <div className="add-article-container">
      <h2>
        <span>Add Article</span>
        <button className="add-article-button" onClick={handleAddArticle}></button>
      </h2>
    </div>
  );
}

export function StoredArticles({ articles, handleDeleteArticle }) {
  return (
    <div className="stored-article-container">
      <h2>Stored Articles</h2>
      {articles.length === 0 ? (
        <p>Empty.</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <span className="trash-icon" onClick={() => handleDeleteArticle(index)}>
                🗑️
              </span>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function About() {
  return (
    <span>
      <a href="https://github.com/thiagowehren/extensao-com-plasmo" target="_blank" rel="noopener noreferrer">
        About
      </a>
    </span>
  );
}
