import React from "react";
import Rectangle from "views/Rectangle/Rectangle";

function Testing() {
  return (
    <div
      style={{
        border: "5px solid rgb(111,41,97)",
        padding: "10px",
        display: "inline-flex",
      }}
    >
      <Rectangle>
        <h3>Heading</h3>
      </Rectangle>
      <div>Here i am</div>
    </div>
  );
}

export default Testing;
