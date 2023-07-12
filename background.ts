chrome.commands.onCommand.addListener((command) => {
    if (command === "add-article") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            const { url, title } = tabs[0];
            chrome.storage.local.get("articles", (result) => {
            const storedArticles = result.articles || [];
            const updatedArticles = [...storedArticles, { url, title }];
            chrome.storage.local.set({ articles: updatedArticles });
            });
        }
        });
    }
});
