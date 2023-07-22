import React from "react";
import Button from "@mui/material/Button";

const Splash = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url("https://i.pinimg.com/originals/ec/6d/39/ec6d39ad370cd8820cd4d89b5a958cb2.png")`,
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          height: "80vh",
          width: "100vw",
        }}
      >
        <div style={{ width: "100vw", paddingTop: "10%", textAlign: "center" }}>
          <h1>PokeGuess</h1>
        </div>
        <div style={{ width: "100vw", paddingTop: "2%", textAlign: "center" }}>
          <h3> Can you catch them all!</h3>
        </div>
      </div>
      <div
        style={{
          height: "20vh",
          width: "100vw",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            props.onContinue(false);
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Splash;
