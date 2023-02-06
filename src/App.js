import "./App.css";
import { Box } from "@mui/material";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Home/Navbar";
import Home from "./pages/Home";

const slides = [img1, img2, img3];

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Navbar />
      <Home slides={slides} />
      <Footer />
    </Box>
  );
}

export default App;
