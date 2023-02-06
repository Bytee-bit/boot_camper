import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        padding: "8px 40px",
        height: "64px",
        display: "flex",
        boxSizing: "border-box",
        position: "sticky",

        background: "#C1CFFF",
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
          <Box
            sx={{
              display: "flex",
              gap: { xs: "8px", sm: "16px" },
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: "11px", sm: "16px" }, color: "#161E3C" }}
            >
              Powered by
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                fontSize: { xs: "11px", sm: "16px" },
                fontWeight: "700",
                color: "#fff",
              }}
            >
              TIME
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: "11px", sm: "16px" }, color: "#161E3C" }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: "11px", sm: "16px" }, color: "#161E3C" }}
            >
              Terms & Conditions
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
