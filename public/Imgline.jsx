import React from "react";
import Boxes from "./Boxes";
import Grids from "./Grids";
function Imgline(){
    return(
        <Grids >
        <Boxes sx={{ width: '100%', height: 100, borderRadius: 2, display:'flex', alignItems:'center' ,justifyContent:"center" }}>
<img src="/Logo1.webp" style={{ height: 40, marginRight:15 }} />
<img src="/logo2.webp" style={{ height: 40 , marginRight:15}}/>
<img src="/logo3.webp" style={{ height: 40 , marginRight:15}}/>
<img src="/logo4.webp" style={{ height: 40 , marginRight:15}}/>
<img src="/logo5.webp" style={{ height: 40 , marginRight:15}}/>
<img src="/logo6.webp" style={{ height: 40 , marginRight:15}}/>
<img src="/logo7.webp" style={{ height: 40 , marginRight:15}}/>
<img src="/logo8.webp" style={{ height: 40 , marginRight:15}}/>
<img src="/logo9.webp" style={{ height: 40 ,marginRight:15}}/>
<img src="/logo10.webp" style={{ height: 40 ,marginRight:15}}/>
        </Boxes>
      </Grids>
    );
}
export default Imgline;




































































































































































































































































































































// import React from "react";
// import Boxes from "./Boxes";
// import Grids from "./Grids";

// function Imgline() {
//   const logos = [
//     "/Logo1.webp",
//     "/logo2.webp",
//     "/logo3.webp",
//     "/logo4.webp",
//     "/logo5.webp",
//     "/logo6.webp",
//     "/logo7.webp",
//     "/logo8.webp",
//     "/logo9.webp",
//     "/logo10.webp",
//   ];

//   return (
//     <Grids>
//       <Boxes
//         sx={{
//           width: "100%",
//           overflow: "hidden",
//           whiteSpace: "nowrap",
//           backgroundColor: "transparent",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           mt: 5,
//         }}
//       >
//         {/* Scrolling container */}
//         <Boxes
//           sx={{
//             display: "inline-flex",
//             alignItems: "center",
//             animation: "scroll 20s linear infinite",
//             "@keyframes scroll": {
//               "0%": { transform: "translateX(0)" },
//               "100%": { transform: "translateX(-50%)" },
//             },
//           }}
//         >
//           {/* Duplicate logos twice for smooth looping */}
//           {[...logos, ...logos].map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               style={{
//                 height: 40,
//                 marginRight: 30,
//               }}
//               alt={`logo-${index}`}
//             />
//           ))}
//         </Boxes>
//       </Boxes>
//     </Grids>
//   );
// }

// export default Imgline;
