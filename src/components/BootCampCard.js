import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "./Carousel";

function BootCampCard({ slides }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={12} lg={10}>
        <Grid
          container
          justifyContent="space-between"
          sx={{
            p: "40px",
            background: "#FFD7B1",
            borderRadius: "8px",
            gap: { xs: "40px", sm: "56px", md: "0px" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "18px", sm: "40px", xl: "44px" },
                lineHeight: { xs: "normal", sm: "52px" },
                color: "#161E3C",
                fontWeight: "900",
              }}
            >
              Amet minim mollit
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                mt: "20px",
                mb: "20px",
                fontSize: { xs: "12px", sm: "20px", xl: "24px" },
                lineHeight: { md: "24px", lg: "36px" },
                // lineHeight: "36px",
                color: "#161E3C",
              }}
            >
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </Typography>
            <Button variant="contained" sx={{ width: "fit-content" }}>
              Join Now
            </Button>
          </Grid>
          <Grid item xs={12} md={4.5}>
            <Carousel autoSlide={true} duration={300} indicator={false}>
              {slides.map((url) => (
                <img
                  src={url}
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    borderRadius: "4px",
                  }}
                />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BootCampCard;
