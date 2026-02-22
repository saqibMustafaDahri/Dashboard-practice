import React from "react";
import TypographyAtom from "../../Atoms/TypographyAtom/page";
import BoxAtom from "../../Atoms/BoxAtom/page";
export default function FourCards({ icon, label }) {
  return (
    <BoxAtom
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "#001652",
        height: "80px",
        width: { xs: "48%", sm: "23%" },
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      {React.cloneElement(icon, {
        sx: { color: "white", fontSize: { xs: "30px", md: "40px" } },
      })}
      <TypographyAtom
        sx={{ fontSize: { xs: "12px", md: "16px" }, color: "white" }}
        text={label}
      />
    </BoxAtom>
  );
}
