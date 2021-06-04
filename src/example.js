import React, { useState } from "react";

function example() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShow(false)}>ซ่อน</button>
      {isShow && <div style={{ width: "700px", height: "700px" }}></div>}
    </div>
  );
}

export default example;
