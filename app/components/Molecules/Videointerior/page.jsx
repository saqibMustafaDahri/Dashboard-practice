import CardOnVideo from "../CardOnVideo/page";
import BoxAtom from "../../Atoms/BoxAtom/page";
export default function Videointerior() {
  return (
    <BoxAtom
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        src="interior.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <CardOnVideo />
    </BoxAtom>
  );
}
