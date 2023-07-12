import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [_, setText] = useState("");
  return (
    <div>
      <header>This is a header component</header>
      <main>
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </main>
    </div>
  );
}
