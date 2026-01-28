"use client";
import Header from "../components/Molecules/Header/page";
import Imgline from "../components/Molecules/Imgline/page";
import Btn from "../components/Atoms/Btn/page";
import Videointerior from "../components/Molecules/Videointerior/page";
import BoxAtom from "../components/Atoms/BoxAtom/page";
import Scroll from "../components/Molecules/Scroll/page";
import Footer from "../components/Molecules/Footer/page";
import ImagesSlider from "../components/Molecules/ImagesSlider/page";
import HoverChangeImage from "../components/Molecules/HoverChangeImage/page";
export default function Home() {
  return (
    <>
      <BoxAtom>
        <Header />
      </BoxAtom>
      <BoxAtom sx={{ width: "100%" }}>
        <BoxAtom sx={{ width: "100%", height: "700px", position: "relative" }}>
          <img
            src={"masjid2.jpg"}
            alt="Masjid"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <BoxAtom
            sx={{
              position: "absolute",
              top: "55%",
              left: "5%",
              width: { xs: "60%", sm: "60%", md: "60%" },
            }}
          >
            <BoxAtom sx={{ marginTop: "55px" }}>
              <Btn
                href="Form"
                sx={{
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
                text="Form"
              />
              <Btn
                href="Dashboard"
                sx={{
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
                text="Dashboard"
              />
            </BoxAtom>
          </BoxAtom>
        </BoxAtom>
      </BoxAtom>
      <BoxAtom sx={{ marginTop: 5 }}>
        <Imgline />
      </BoxAtom>
      <BoxAtom sx={{ marginTop: 20 }}>
        <HoverChangeImage />
      </BoxAtom>
      <Scroll />
      <ImagesSlider />
      <Videointerior />
      <Footer />
    </>
  );
}
