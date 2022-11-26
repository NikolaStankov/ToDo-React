import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { Check, Delete } from "@mui/icons-material";

const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo }) => {
  const handleCheck = () => {
    checkTodo(id);
  };

  const handleDelete = ()=>{
    deleteTodo(id)
  }

  const todoStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
    
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ marginTop: 35, background: "lightgray" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2" style={todoStyle}>
              <IconButton onClick={handleCheck}>
                <Check style={{ color: "green" }} />
              </IconButton>
              <span>{title}</span>
              <IconButton style={{ float: "right" }} onClick={handleDelete} >
                <Delete style={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
