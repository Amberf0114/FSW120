import React from "react";
import Parent from "./Parent"

function App() {
  return (
    <div className="info">
      <Parent
      fileInfo={{title:"Parent Child Component" , subtitle:"Learn Parent Child Components", information:"Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem"}}
      />
    </div>
  );
}
export default App