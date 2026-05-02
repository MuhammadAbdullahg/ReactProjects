import { useState } from "react";

function HideShowText() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hideText" : "showText"}
      </button>
      <h1>{show ? "Learning React" : ""}</h1>
    </div>
  );
}

export default HideShowText;
