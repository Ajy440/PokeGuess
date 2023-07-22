import React from "react";
import Button from "@mui/material/Button";

const FooterButtons = (prop) => {
  const handleSuccess = () => {
    prop?.updateButtonClicked(true);
    prop?.updateIsCorrect(true);
    prop?.updateIndex();
  };

  const handleFailure = () => {
    prop?.updateButtonClicked(true);
    prop?.updateIsCorrect(false);
  };

  return (
    <Button
      variant="text"
      style={{
        color: prop?.isCorrect ? "white" : "white",
        width: "100%",
        backgroundColor: "#1B6B93",
      }}
      onClick={prop?.isCorrect ? handleSuccess : handleFailure}
    >
      {prop?.name ? prop.name : "PIKACHU"}
    </Button>
  );
};

export default FooterButtons;
