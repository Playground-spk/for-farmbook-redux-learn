import React from "react";

function Example2({ isShow }) {
  return <div>{isShow && <div style={{ width: "700px", height: "700px" }}></div>}</div>;
}

export default Example2;
