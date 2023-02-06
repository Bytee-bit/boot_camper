import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Carousel } from "../Carousel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    background: "red",
  },
}));

const styles = (theme) => ({
  Responsive: {
    [theme.breakpoints.down("md")]: {
      background: "red",
    },
  },
});

const slides = [img1, img2, img3];
function Features({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "#FB9B43",
        }}
      ></Box> */}
      <Box>
        <CheckCircleIcon
          sx={{
            width: { sm: "56px", md: "64px", lg: "80px" },
            height: { sm: "56px", md: "64px", lg: "80px" },
            color: "#FB9B43",
          }}
        />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          m: { xs: "4px 0px", sm: "20px 0px" },
          fontSize: { xs: "8px", md: "16px", lg: "24px" },
          lineHeight: "36px",
          color: "#fff",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

function Hero() {
  //   const s = styles();
  const [w, setW] = useState(window.innerWidth);
  console.log(w);

  return (
    <Box sx={{ padding: "40px", background: "#161E3C" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          // p: "16px",
          gap: { xs: "40px" },
        }}
      >
        <Grid item xs={12} sm={10} md={5} lg={4} sx={{}}>
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
          sm={10}
          md={4}
          lg={3}
          xl={3.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "40px",
                md: "34px",
                lg: "32px",
                xl: "44px",
              },
              lineHeight: {
                xs: "60px",
                // sm: "40px",
                // md: "34px",
                // lg: "60px",
              },
              color: "#fff",
            }}
          >
            <span style={{ color: "#FB9B43", fontWeight: "900" }}>
              Get ready
            </span>{" "}
            to grow with us ⭐️
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              m: { sm: "10px 0px", md: "20px 0px", lg: "20px 0px" },
              //   fontSize: "24px",
              fontSize: {
                xs: "12px",
                sm: "24px",
                md: "14px",
                lg: "18px",
                xl: "24px",
              },
              color: "#fff",
            }}
          >
            Start with us today
          </Typography>
          <Button variant="contained" sx={{ width: "fit-content" }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "24px",
                  md: "12px",
                  lg: "18px",
                  xl: "24px",
                },
                // lineHeight: "36px",
              }}
            >
              View all courses
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        sx={{
          mt: { xs: "40px", sm: "80px", md: "128px" },
          gap: { xs: "16px", sm: "40px" },
        }}
      >
        <Grid item xs={3.5} sm={2.5}>
          <Features title={"500+ happy customers "} />
        </Grid>
        <Grid item xs={3.5} sm={2.5}>
          <Features title={"Learn as you go"} />
        </Grid>
        <Grid item xs={3.5} sm={2.5}>
          <Features title={"Self-paced learning"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
