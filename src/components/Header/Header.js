import React from "react";

const Header = (prop) => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        padding: "2%",
      }}
    >
      <h2>Score : {prop.currentScore}/20</h2>
    </div>
  );
};

export default Header;
