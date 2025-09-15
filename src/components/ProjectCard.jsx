import { Card, CardContent, Typography, Button } from "@mui/material";

function ProjectCard({ title, desc, domain, type, tech, link }) {
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{desc}</Typography>
        <Typography>Domain: {domain} | Type: {type}</Typography>
        <Typography>Technologies: {tech.join(", ")}</Typography>
        <Button href={link} target="_blank">View Project</Button>
      </CardContent>
    </Card>
  );
}
export default ProjectCard;
