import React from "react";

const Line = () => {
  return (
    <div>
      <div
        style={{
          height: "1px",
          backgroundColor: "#C2C9D1",
          margin: "5px 0px 5px 0px",
        }}
      ></div>
    </div>
  );
};

export default React.memo(Line);
