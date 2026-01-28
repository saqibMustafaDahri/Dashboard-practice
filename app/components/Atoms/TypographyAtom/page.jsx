import { Typography } from "@mui/material";
import React from "react";
function TypographyAtom({ sx = {}, text, variant, href }) {
  return (
    <Typography sx={sx} variant={variant} href={href}>
      {text}
    </Typography>
  );
}

export default TypographyAtom;
