import { Paper } from "@mui/material";
export default function PaperAtom({ sx = {}, children, elevation }) {
  return (
    <Paper elevation={elevation} sx={sx}>
      {children}
    </Paper>
  );
}
