import React from "react";
import { Box } from "@mui/material";
import BoxAtom from "../../Atoms/BoxAtom/page";
import { logos } from "../../../Constants/data";
function Imgline() {
  const doubledLogos = [...logos, ...logos];

  return (
    <BoxAtom sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        sx={{
          width: "90%",
          overflow: "hidden",
          mt: 5,
          backgroundColor: "white",
          py: 2,
          position: "relative",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "scroll 30s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {doubledLogos.map((src, index) => (
            <Box
              component="img"
              key={index}
              src={src}
              alt={`logo-${index}`}
              sx={{
                height: { xs: "30px", md: "40px" },
                mx: { xs: 1, sm: 2, md: 4, lg: 4 },
                flexShrink: 0,
              }}
            />
          ))}
        </Box>
      </Box>
    </BoxAtom>
  );
}

export default Imgline;
