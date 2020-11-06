import React, { useState } from "react";
import DataWrapChart from "../components/DataWrap";
import { Button } from "theme-ui";

export default function ButtonToggle({ buttonText, srcs }) {
  const tabColor = {
    0: ["black", "primary"],
    1: ["primary", "black"],
  };

  // set initial state
  const [selectedSrc, setSrc] = useState(srcs["left"]);

  // set up left button state
  const [lbColor, setLBColor] = useState(tabColor[0]);

  //set up right button state
  const [rbColor, setRBColor] = useState(tabColor[1]);

  function handleLBClick() {
    setSrc(srcs["left"]);
    setLBColor(tabColor[0]);
    setRBColor(tabColor[1]);
  }

  function handleRBClick() {
    setSrc(srcs["right"]);
    setLBColor(tabColor[1]);
    setRBColor(tabColor[0]);
  }

  return (
    <div>
      <Button
        onClick={handleLBClick}
        sx={{
          appearance: "none",
          display: "inline-block",
          textAlign: "center",
          lineHeight: "inherit",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "bold",
          font: "inherit",
          m: 0,
          px: 0,
          py: 0,
          borderRadius: 0,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          color: "primary",
          background: lbColor[1],
          borderWidth: "1px",
          borderStyle: "solid",
          width: "80px",
          height: 45,
          outline: "none",
          marginBottom: "6px",
        }}
      >
        <b style={{ color: "white", fontSize: "14px" }}>{buttonText[0]}</b>
      </Button>

      <Button
        onClick={handleRBClick}
        sx={{
          appearance: "none",
          display: "inline-block",
          textAlign: "center",
          lineHeight: "inherit",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "bold",
          font: "inherit",
          m: 0,
          px: 2,
          py: 2,
          borderRadius: 0,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          color: "primary",
          background: rbColor[1],
          borderWidth: "1px",
          borderStyle: "solid",
          width: "80px",
          height: 45,
          outline: "none",
          marginBottom: "6px",
        }}
      >
        <b style={{ color: "white", fontSize: "14px" }}>{buttonText[1]}</b>
      </Button>

      <div>
        <DataWrapChart
          frameborder="0"
          aria-label="Table"
          id="datawrapper-chart-Fucs6"
          height="500"
          allowfullscreen="true"
          src={selectedSrc}
        />
      </div>
    </div>
  );
}
