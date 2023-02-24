import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [buttonColor, setButtonColor] = useState("white");
  const [name, setName] = useState("");

  function handleClick(event) {
    setHeadingText(name);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form action="submit">
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          onClick={handleClick}
          onMouseOver={() => setButtonColor("black")}
          onMouseLeave={() => setButtonColor("white")}
          style={{ backgroundColor: buttonColor }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
