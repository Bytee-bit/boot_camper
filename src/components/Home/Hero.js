import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Carousel } from "../Carousel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const slides = [img1, img2, img3];
function Features() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "#FB9B43",
        }}
      ></Box>
      <Typography
        variant="subtitle2"
        sx={{
          mt: "20px",
          mb: "20px",
          fontSize: "24px",
          lineHeight: "36px",
          color: "#fff",
        }}
      >
        500+ happy customers{" "}
      </Typography>
    </Box>
  );
}

function Hero() {
  return (
    <Box sx={{ padding: "40px", background: "#161E3C" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          // p: "16px",
          gap: "40px",
        }}
      >
        <Grid item xs={12} md={5} sx={{ maxWidth: "400px" }}>
          <Carousel autoSlide={true} duration={300}>
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
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "44px", lineHeight: "60px", color: "#fff" }}
          >
            <span style={{ color: "#FB9B43" }}>Get ready</span> to grow with us
            ⭐️
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mt: "20px",
              mb: "20px",
              fontSize: "24px",
              lineHeight: "60px",
              color: "#fff",
            }}
          >
            Start with us today
          </Typography>
          <Button variant="contained">
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "24px", lineHeight: "60px" }}
            >
              View all courses
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        sx={{ mt: "40px", gap: "40px" }}
      >
        <Grid item xs={3}>
          <Features />
        </Grid>
        <Grid item xs={3}>
          <Features />
        </Grid>
        <Grid item xs={3}>
          <Features />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
