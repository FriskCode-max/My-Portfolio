import { useState } from "react";
import { FormControlLabel, Checkbox, Container } from "@mui/material";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const [filters, setFilters] = useState({ Course: false, Personal: false });

  const handleChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
  };

  const filteredProjects = projects.filter((p) =>
    (filters.Course && p.type === "Course") ||
    (filters.Personal && p.type === "Personal") ||
    (!filters.Course && !filters.Personal) // show all if no filter
  );

  return (
    <Container>
      <h2>My Projects</h2>
      <FormControlLabel 
        control={<Checkbox name="Course" onChange={handleChange} />} 
        label="Course" 
      />
      <FormControlLabel 
        control={<Checkbox name="Personal" onChange={handleChange} />} 
        label="Personal" 
      />
      {filteredProjects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </Container>
  );
}
export default Portfolio;
