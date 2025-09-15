import { Container, Typography, Avatar } from "@mui/material";

function Home() {
  return (
    <Container>
      <Avatar 
        alt="Anirudha Pawar" 
        src="your-photo.jpgC:\Users\crank\OneDrive\Pictures\Screenshots\Screenshot 2025-08-13 104855.png" 
        sx={{ width: 100, height: 100, margin: "20px auto" }}
      />
      <Typography variant="h4" align="center">Your Name</Typography>
      <Typography align="center">Aspiring Developer | Grey Hat</Typography>
      <Typography align="center" sx={{mt:2}}>
        Hi! I’m a student learning React and Fullstack development. I enjoy building projects and learning new technologies.
      </Typography>
    </Container>
  );
}
export default Home;
