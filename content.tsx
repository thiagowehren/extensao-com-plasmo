import { PlasmoCSConfig } from "plasmo"
import { useState, useEffect } from "react"
import cssText from "data-text:~/content.css"

export const config: PlasmoCSConfig = {
  matches: ["https://marginalrevolution.com/*"]
}

export const getStyle = () => {
const style = document.createElement("style")
style.textContent = cssText
return style
}

function Content() {
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
  if (message.toggleValue !== undefined) {
    setIsChecked(!!message.toggleValue);
  }
});
  
    // Retrieve the stored value of isChecked from chrome.storage
    chrome.storage.sync.get("toggleValue", ({ toggleValue }) => {
      if (toggleValue !== undefined) {
        setIsChecked(!!toggleValue);
      }
    });

    const fetchData = async () => {
      try {
        const response = await fetch('https://marginalrevolution.com/categories');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const categoriesSection = doc.querySelector('.categories');
        const links = categoriesSection.querySelectorAll('li a');
        const linksArray = Array.from(links);
        setCategories(linksArray);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className={`background-container ${isChecked ? "show" : "hide"}`}>
    <h4>Categories</h4>
      <a key="0" href="https://marginalrevolution.com/?s=assorted+links"><button className="button-59">Assorted links</button></a>
      {categories.map((link, index) => (
          <a key={index+1} href={link.href}><button className="button-59">{link.textContent}</button></a>
      ))}
    </div>
  );
}

export default Content;
