import { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"} text
      </button>

      {show && <p>Hello I am visible text</p>}
    </div>
  );
}
