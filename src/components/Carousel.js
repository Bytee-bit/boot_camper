import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export function Carousel({ children: slides, autoSlide, duration }) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <Box
      sx={{
        // border: "1px solid #000",
        position: "relative",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          // border: "1px solid #000",
          // position: "relative",
          borderRadius: "4px",
        }}
      >
        <Box
          // className="slide"
          sx={{
            display: "flex",
            transform: `translateX(-${curr * 100}%)`,
            transition: "all 500ms ease-out",
          }}
        >
          {slides}
        </Box>
        {/* <Box sx={{ position: "absolute", top: "0px", display: "flex" }}>
        <Typography onClick={prev}>prev</Typography>
        <Typography onClick={next}>next</Typography>
      </Box> */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            gap: "8px",
          }}
        >
          {slides.map((item, idx) => (
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#C1CFFF",
                p: curr === idx ? "2px" : "0px",
                opacity: curr === idx ? "1" : "0.5",
              }}
            ></Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
