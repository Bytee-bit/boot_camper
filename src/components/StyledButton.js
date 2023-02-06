import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBtn = styled(Button)({
  width: "280px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 16px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#161E3C",
  borderColor: "#161E3C",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#161e3ceb",
    borderColor: "#161e3ceb",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#161E3C",
    borderColor: "#161E3C",
  },
});

function StyledButton({ title, isIcon = false, sx, btnClick }) {
  // color;
  return (
    <StyledBtn
      onClick={btnClick}
      variant="contained"
      sx={sx}
      //   sx={{
      //     "&": {
      //       border: "1px solid red",
      //     },
      //   }}
      //   onClick={() => handleBtnClick(idx)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          position: "relative",
        }}
      >
        <Typography>{title}</Typography>
        {isIcon && (
          <ArrowForwardIcon
            sx={{
              "&": {
                transition: "all 500ms ease-out",
              },
              "&:hover": {
                transform: `translateX(100%)`,
              },
              // width: "100%",
            }}
          />
        )}
      </Box>
    </StyledBtn>
  );
}

export default StyledButton;
