import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../assets/profile_pic.jpg";

function CardCompo() {
  return (
    <Card sx={{ maxWidth: 345, p: "16px", background: "#FFD7B1" }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="280"
        width="280"
        image={profile}
        alt="green iguana"
        sx={{
          borderRadius: "4px",
          "&": {
            height: { sm: "180px", md: "224px", lg: "280px" },
          },
        }}
      />
      <CardContent sx={{ "&": { p: "0px" } }}>
        <Typography
          // variant="subtitle2"
          sx={{
            mt: "20px",
            mb: "20px",
            fontSize: "24px",
            lineHeight: "36px",
            color: "#222223",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Toledo
        </Typography>
      </CardContent>

      <CardActions sx={{ "&": { p: "0px" } }}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          fullWidth
          sx={{ color: "#161E3C" }}
        >
          <Typography variant="subtitle2" sx={{ color: "#fff" }}>
            Join Now
          </Typography>
        </Button>
      </CardActions>
      {/* </CardActionArea> */}
    </Card>
  );
}

function CardSectuion() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: "40px",
        gap: "40px",
        background: "#C1CFFF",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "24px", sm: "32px", md: "40px" },
          lineHeight: "60px",
          color: "#282828",
        }}
      >
        Checkout my courses
      </Typography>
      <Grid container justifyContent="center" gap="40px" sx={{ width: "100%" }}>
        <Grid item xs={12} sm={3.5} md={3.5}>
          <CardCompo />
        </Grid>
        <Grid item xs={12} sm={3.5} md={3.5}>
          <CardCompo />
        </Grid>
        <Grid item xs={12} sm={3.5} md={3.5}>
          <CardCompo />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardSectuion;
