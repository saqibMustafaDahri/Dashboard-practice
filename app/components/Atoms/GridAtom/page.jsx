export default function GridAtom({
  sx = {},
  children,
  container,
  item,
  spacing,
  xs,
  sm,
  md,
  lg,
  xl,
}) {
  const { Grid } = require("@mui/material");
  return (
    <Grid
      sx={sx}
      container={container}
      item={item}
      spacing={spacing}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </Grid>
  );
}
