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
        // paddingX: "20px",
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

// import React from "react";
// import TypographyAtom from "../../Atoms/TypographyAtom/page";
// import BoxAtom from "../../Atoms/BoxAtom/page";

// export default function FourCards({ icon, label }) {
//   return (
//     <BoxAtom
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "#001652",
//         // Responsive Width: Mobile par 48% (2 in a row), Desktop par 23% (4 in a row)
//         width: { xs: "48%", sm: "23%" },
//         minHeight: "80px", // Fixed height ki jagah minHeight behtar hai mobile ke liye
//         paddingX: { xs: "10px", sm: "20px" }, // Mobile par padding thodi kam
//         borderBottomLeftRadius: "8px",
//         borderBottomRightRadius: "8px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
//         boxSizing: "border-box", // Padding ko width ke andar rakhne ke liye
//       }}
//     >
//       {React.cloneElement(icon, {
//         sx: {
//           color: "white",
//           fontSize: { xs: "28px", sm: "40px" }, // Icon mobile par thoda chhota
//         },
//       })}

//       <TypographyAtom
//         sx={{
//           fontSize: { xs: "13px", sm: "16px" }, // Text size responsive
//           color: "white",
//           textAlign: "right",
//           flex: 1,
//           marginLeft: "10px",
//         }}
//         text={label}
//       />
//     </BoxAtom>
//   );
// }
