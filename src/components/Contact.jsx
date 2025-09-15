import { useState } from "react";
import { Container, TextField, Button } from "@mui/material";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!"); // ✅ shows message
    setForm({ name: "", email: "", message: "" }); // clears form
  };

  return (
    <Container sx={{ mt: 3 }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          name="name" 
          label="Name" 
          fullWidth 
          margin="normal" 
          onChange={handleChange} 
          value={form.name} 
        />
        <TextField 
          name="email" 
          label="Email" 
          type="email"
          fullWidth 
          margin="normal" 
          onChange={handleChange} 
          value={form.email} 
        />
        <TextField 
          name="message" 
          label="Message" 
          multiline 
          rows={4} 
          fullWidth 
          margin="normal" 
          onChange={handleChange} 
          value={form.message} 
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
export default Contact;
