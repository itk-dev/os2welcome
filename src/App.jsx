import { useState } from "react";
import config from "../public/config.json5";
import "./App.css";

function App() {
  const { pages } = config;
  const [selectedFrame, setSelectedFrame] = useState(null);

  function changeFrame(page) {
    setSelectedFrame(page);
  }

  return (
    <>
      {selectedFrame && selectedFrame.type === "audiobook" && (
        <img src={selectedFrame.url}></img>
      )}
      {pages && (
        <div>
          {pages.map((page) => {
            const { id, buttonText } = page;
            return (
              <button type="button" onClick={() => changeFrame(page)} key={id}>
                {buttonText}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
