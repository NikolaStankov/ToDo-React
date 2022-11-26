import { FormControl, Container, TextField, Button } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Add to do items"
            required={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: 10 }}
          >
            Add todo
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
