import { useState, useEffect } from "react";
import { Title, ToggleButton, AddArticle, StoredArticles, About } from "./popupComponents";
import { handleColorChange, handleAddArticle, handleDeleteArticle } from "./popupUtils";


import "./popup.css"; 

function IndexPopup() {
  const [toggle, setToggle] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Retrieve the stored valuein chrome.storage
    chrome.storage.sync.get("toggleValue", ({ toggleValue }) => {
      if (toggleValue !== undefined) {
        setToggle(toggleValue);
      }
    });

    // Retrieve the articles from storage
    chrome.storage.local.get("articles", (result) => {
      const storedArticles = result.articles || [];
      setArticles(storedArticles);
    });
  }, []);
  
  return (
    <div className="wrapper">
      <Title />
      <ToggleButton toggle={toggle} handleColorChange={(event) => handleColorChange(event, setToggle)} />
      <AddArticle handleAddArticle={() => handleAddArticle(setArticles)} />
      <StoredArticles articles={articles} handleDeleteArticle={(index) => handleDeleteArticle(index, articles, setArticles)} />
      <About />
    </div>
  );
}

export default IndexPopup;
