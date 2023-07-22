import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FooterButtons from "./FooterButtons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1B6B93" : "#1B6B93",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = (props) => {
  const random_boolean = Math.random() < 0.5;

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      padding={"2%"}
    >
      <Grid item xs={6}>
        {random_boolean ? (
          <Item sx={{ boxShadow: 1, borderRadius: "16px" }}>
            <FooterButtons
              name={props?.correctName}
              isCorrect={true}
              updateIndex={props?.updateIndex}
              updateButtonClicked={props.updateButtonClicked}
              updateIsCorrect={props.updateIsCorrect}
            />
          </Item>
        ) : (
          <Item sx={{ boxShadow: 1, borderRadius: "16px" }}>
            {" "}
            <FooterButtons
              name={props?.incorrectName}
              isCorrect={false}
              updateIndex={props?.updateIndex}
              updateButtonClicked={props.updateButtonClicked}
              updateIsCorrect={props.updateIsCorrect}
            />
          </Item>
        )}
      </Grid>
      <Grid item xs={6}>
        {!random_boolean ? (
          <Item sx={{ boxShadow: 1, borderRadius: "16px" }}>
            <FooterButtons
              name={props?.correctName}
              isCorrect={true}
              updateIndex={props?.updateIndex}
              updateButtonClicked={props.updateButtonClicked}
              updateIsCorrect={props.updateIsCorrect}
            />
          </Item>
        ) : (
          <Item sx={{ boxShadow: 1, borderRadius: "16px" }}>
            {" "}
            <FooterButtons
              name={props?.incorrectName}
              isCorrect={false}
              updateIndex={props?.updateIndex}
              updateButtonClicked={props.updateButtonClicked}
              updateIsCorrect={props.updateIsCorrect}
            />
          </Item>
        )}
      </Grid>
    </Grid>
  );
};

export default Footer;
