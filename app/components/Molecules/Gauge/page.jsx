import React, { useState, useEffect } from "react";
import BoxAtom from "../../Atoms/BoxAtom/page";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

const COLORS = ["#f44336", "#4caf50", "#2196f3", "#ffeb3b"];

function GaugePointer({ color }) {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={color}
        strokeWidth={3}
      />
    </g>
  );
}

export default function Gauge() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentColor = COLORS[colorIndex];

  return (
    <BoxAtom
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GaugeContainer
        width={200}
        height={200}
        startAngle={-110}
        endAngle={110}
        value={30}
        sx={{ transition: "fill 1s ease-in-out" }}
      >
        <GaugeReferenceArc />
        <GaugeValueArc sx={{ fill: currentColor }} />
        <GaugePointer color={currentColor} />
      </GaugeContainer>
    </BoxAtom>
  );
}
