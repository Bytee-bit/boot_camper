import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import profile from "../../assets/profile_pic.jpg";

const navItem = [
  {
    id: 1,
    title: "Programs",
  },
  {
    id: 2,
    title: "Retreats",
  },
  {
    id: 3,
    title: "Blogs",
  },
  {
    id: 4,
    title: "Contact us",
  },
];

function Navbar() {
  return (
    <Box
      sx={{
        padding: "14px 40px",
        height: "64px",
        boxSizing: "border-box",
        position: "fixed",
        right: "0px",
        left: "0px",
        top: "0px",
        background: "#161E3C",
        zIndex: "1000",
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          sm={10}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={profile} />
            </IconButton>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: "11px", sm: "16px" }, color: "#fff" }}
            >
              Annette Black
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "24px",
                alignItems: "center",
              }}
            >
              {navItem.map((item) => (
                <Typography
                  key={item.id}
                  variant="subtitle2"
                  sx={{ fontSize: "16px", color: "#fff" }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                p: "4px 16px",
                borderRadius: "20px",
                border: "1px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                position: "relative",
                background: "transparent",
                zIndex: "10",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-4px",
                  left: "-8px",
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  p: "4px",
                  zIndex: "10",
                  transition: "all 500ms ease-in",
                  "&:hover": {
                    background: "#FB9B43",
                    zIndex: "-1",
                    width: "0%",
                  },
                }}
              ></Box>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: { xs: "11px", sm: "16px" }, color: "#fff" }}
              >
                login
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Navbar;
