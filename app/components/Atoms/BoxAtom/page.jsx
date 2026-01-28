import { Box } from "@mui/material";
export default function BoxAtom({
  sx = {},
  children,
  component,
  onSubmit,
  onMouseEnter,
  src,
  alt,
}) {
  return (
    <Box
      sx={sx}
      component={component}
      onSubmit={onSubmit}
      onMouseEnter={onMouseEnter}
      src={src}
      alt={alt}
    >
      {children}
    </Box>
  );
}
