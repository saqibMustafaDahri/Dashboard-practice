import TypographyAtom from "../../Atoms/TypographyAtom/page";
import BoxAtom from "../../Atoms/BoxAtom/page";
export default function Footer() {
  return (
    <>
      <BoxAtom
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          paddingBottom: "20px",
        }}
      >
        <BoxAtom
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px" },
            alignItems: "center",
            paddingX: "60px",
            width: "100%",
            paddingY: "20px",
          }}
        >
          <BoxAtom
            sx={{
              height: { xs: "100px", md: "200px" },
              width: { xs: "100%", md: "30%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TypographyAtom
              sx={{ fontSize: "20px", color: "red", fontWeight: "bold" }}
              text="Contact Us"
            />
            <TypographyAtom
              sx={{ fontSize: "15px", color: "white" }}
              text="Email: asdfghjkl@gmail.com"
            />
            <TypographyAtom
              sx={{ fontSize: "15px", color: "white" }}
              text="Phone No: 031245678922"
            />
          </BoxAtom>
          <BoxAtom
            sx={{
              height: { xs: "100px", md: "200px" },
              width: { xs: "100%", md: "30%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TypographyAtom
              sx={{ fontSize: "20px", color: "red", fontWeight: "bold" }}
              text="Address"
            />
            <TypographyAtom
              sx={{ fontSize: "15px", color: "white" }}
              text="scsdcsdcsdcdscsdsdfvfvgbg"
            />
          </BoxAtom>
          <BoxAtom
            sx={{
              height: { xs: "100px", md: "200px" },
              width: { xs: "100%", md: "30%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TypographyAtom
              sx={{ fontSize: "20px", color: "red", fontWeight: "bold" }}
              text="Opening Times"
            />
            <TypographyAtom
              sx={{ fontSize: "15px", color: "white" }}
              text="Monday - Friday"
            />
            <TypographyAtom
              sx={{ fontSize: "15px", color: "white" }}
              text="10AM - 10PM"
            />
          </BoxAtom>
        </BoxAtom>
        <BoxAtom
          sx={{
            height: { xs: "300px", md: "200px" },
            marginLeft: "60px",
            marginRight: "60px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TypographyAtom
            sx={{ color: "red", fontSize: "30px", fontWeight: "bold" }}
            text="HEADING"
          />
          <TypographyAtom
            sx={{ color: "white", fontSize: "15px", width: "70%" }}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            ab? Placeat at, ducimus eum perferendis expedita, repellat atque
            dolores officia accusamus et animi nesciunt repellendus praesentium.
            Repellat blanditiis in totam?"
          />
        </BoxAtom>
      </BoxAtom>
    </>
  );
}
