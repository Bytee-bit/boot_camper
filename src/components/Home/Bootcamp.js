import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BootCampCard from "../BootCampCard";

const btns = [
  {
    id: 0,
    title: "Corporate",
  },
  {
    id: 1,
    title: "Groups",
  },
  {
    id: 2,
    title: "Upcoming",
  },
];

function Bootcamp({ slides }) {
  const [activeBtn, setActiveBtn] = useState(0);

  const handleBtnClick = (idx) => setActiveBtn(idx);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: "40px",
        gap: "40px",
        background: "#fff",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "40px", lineHeight: "60px", color: "#161E3C" }}
      >
        Bootcamps
      </Typography>
      {/* activeBtn */}
      <Box sx={{ display: "flex", gap: "16px" }}>
        {btns.map((btn, idx) => (
          <Button
            variant="contained"
            key={btn.id}
            sx={{
              background: idx === activeBtn ? "#FB9B43" : "#FFD7B1",
              color: "#161E3C",
            }}
            onClick={() => handleBtnClick(idx)}
          >
            {btn.title}
          </Button>
        ))}
      </Box>
      {activeBtn === 0 ? (
        <BootCampCard slides={slides} />
      ) : activeBtn === 1 ? (
        <BootCampCard slides={slides} />
      ) : (
        <BootCampCard slides={slides} />
      )}
    </Box>
  );
}

export default Bootcamp;
