import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "16px", color: "#fff" }}
          >
            Powered by
          </Typography>

          <Typography>
            <span style={{ fontWeight: "700" }}>T</span>IME
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "16px", color: "#161E3C" }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "16px", color: "#161E3C" }}
          >
            Terms & Conditions
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
