import { Button } from "@mui/material";
import React from "react";
function Btn({ sx = {}, text, onClick, href, disabled, startIcon, type }) {
  return (
    <Button
      type={type}
      startIcon={startIcon}
      disabled={disabled}
      variant="outlined"
      sx={sx}
      onClick={onClick}
      href={href}
    >
      {text}
    </Button>
  );
}

export default Btn;
