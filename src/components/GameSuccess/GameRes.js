import React from "react";
import Button from "@mui/material/Button";

const GameRes = (props) => {
  const isSuccess = props?.success;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",

        backgroundImage: isSuccess
          ? "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))"
          : "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
        textAlign: "center",
        alignContent: "center",
        alignContent: "center",
      }}
    >
      <img
        src={
          isSuccess
            ? "https://media.tenor.com/0WkmuOC_W00AAAAj/waving-pikachu.gif"
            : "https://gifdb.com/images/high/pokemon-sad-pikachu-anime-slap-zt892ffbd96qbbb6.gif"
        }
        style={{ marginTop: "20vh", maxWidth: "60%" }}
      />
      <br />
      <div style={{ padding: "2%", color: "grey" }}>
        <h1>
          {isSuccess
            ? "Yeah you did it, you are the next pokeMaster"
            : "I trusted you..!"}
        </h1>
      </div>
      <Button
        variant="contained"
        color="success"
        style={{ marginTop: "5%" }}
        onClick={() => props?.handleReset()}
      >
        Try me again!
      </Button>
    </div>
  );
};

export default GameRes;
