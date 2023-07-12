import { Article } from "./popupTypes";

export function handleColorChange(event: React.ChangeEvent<HTMLInputElement>, setToggle: React.Dispatch<React.SetStateAction<boolean>>): void {
    const isChecked = event.target.checked;
    setToggle(isChecked);
    // Store the value in chrome.storage
    chrome.storage.sync.set({ toggleValue: isChecked });
  
    // Send a message to other instances
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, { toggleValue: isChecked });
      });
    });
}
  
export function handleAddArticle(setArticles: React.Dispatch<React.SetStateAction<Article[]>>): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
        const { url, title } = tabs[0];
        // Add url and title of page in storage
        chrome.storage.local.get("articles", (result) => {
        const storedArticles = result.articles || [];
        const updatedArticles = [...storedArticles, { url, title }];
        chrome.storage.local.set({ articles: updatedArticles }, () => {
            setArticles(updatedArticles);
        });
        });
    }
    });
}

export function handleDeleteArticle(index: number, articles: Article[], setArticles: React.Dispatch<React.SetStateAction<Article[]>>): void {
    const updatedArticles = [...articles];
    updatedArticles.splice(index, 1);
    chrome.storage.local.set({ articles: updatedArticles });
    setArticles(updatedArticles);
}
