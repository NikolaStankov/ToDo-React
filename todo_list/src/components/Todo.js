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
      <Container style={{display: "flex", flexDirection:"column" , justifyContent: "Center", alignItems: "Center"}}>
        <Card
          variant="outlined"
          style={{ marginTop: 35, background: "rgb(222, 221, 220, 0.2)", borderRadius : "20px", width: "98%", border: "none", boxShadow: "2px 4px rgb(222, 221, 220, 0.5)"}}
        >
        <CardContent style={{padding: "10px"}} >
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
