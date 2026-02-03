import React from "react";
import TypographyAtom from "../../Atoms/TypographyAtom/page";
import BoxAtom from "../../Atoms/BoxAtom/page";
export default function FourCards({ icon, label }) {
  return (
    <BoxAtom
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#001652",
        height: "80px",
        width: { xs: "48%", sm: "23%" },
        paddingX: "20px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      {React.cloneElement(icon, {
        sx: { color: "white", fontSize: "40px" },
      })}
      <TypographyAtom sx={{ fontSize: "16px", color: "white" }} text={label} /> 
    </BoxAtom>
  );
}
