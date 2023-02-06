import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BootCampCard from "../BootCampCard";
import StyledButton from "../StyledButton";

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
        sx={{
          fontSize: { xs: "28px", sm: "40px" },
          lineHeight: { xs: "32px", sm: "60px" },
          color: "#161E3C",
        }}
      >
        Bootcamps
      </Typography>
      {/* activeBtn */}
      <Box sx={{ display: "flex", gap: "16px" }}>
        {btns.map((btn, idx) => (
          <StyledButton
            btnClick={() => handleBtnClick(idx)}
            key={btn.id}
            title={btn.title}
            isIcon={false}
            sx={{
              "&": {
                background: idx === activeBtn ? "#FB9B43" : "#FFD7B1",
                fontSize: { xs: "10px", sm: "24px" },
                p: "10px 20px",
                width: "fit-content",
                border: "#FB9B43",
                color: "#161E3C",
              },
              "&:hover": {
                backgroundColor: "#FB9B43eb",
                borderColor: "#FB9B43eb",
                boxShadow: "none",
              },
            }}
          />
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
