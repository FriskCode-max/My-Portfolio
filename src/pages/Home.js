import { Container, Typography, Avatar } from "@mui/material";

function Home() {
  return (
    <Container>
      <Avatar 
        alt="Your Name" 
        src="your-photo.jpg" 
        sx={{ width: 100, height: 100, margin: "20px auto" }}
      />
      <Typography variant="h4" align="center">Your Name</Typography>
      <Typography align="center">Aspiring Developer | Your Skills</Typography>
      <Typography align="center" sx={{mt:2}}>
        Hi! I’m a student learning React and Fullstack development. I enjoy building projects and learning new technologies.
      </Typography>
    </Container>
  );
}
export default Home;
