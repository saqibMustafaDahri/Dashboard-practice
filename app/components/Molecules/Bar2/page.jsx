import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import BoxAtom from "../../Atoms/BoxAtom/page";
const settings = {
  width: 200,
  height: 200,
  value: 60,
};

export default function Bar2() {
  return (
    <BoxAtom
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Gauge
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "url(#gauge-gradient)",
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
      >
        <defs>
          <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2e7d32">
              <animate
                attributeName="stop-color"
                values="#2e7d32; #0288d1; #7b1fa2; #d32f2f; #ed6c02; #2e7d32"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#0288d1">
              <animate
                attributeName="stop-color"
                values="#0288d1; #7b1fa2; #d32f2f; #ed6c02; #2e7d32; #0288d1"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#7b1fa2">
              <animate
                attributeName="stop-color"
                values="#7b1fa2; #d32f2f; #ed6c02; #2e7d32; #0288d1; #7b1fa2"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </Gauge>
    </BoxAtom>
  );
}
