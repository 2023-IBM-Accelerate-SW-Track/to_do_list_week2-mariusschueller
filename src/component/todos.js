import React from "react";
import "../component/todos.css";
import {
  Card,
  ListItemButton,
  ListItemText,
  Grid,
  Checkbox,
} from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox
                style={{ paddingLeft: 0 }}
                color="primary"
                onClick={() => deleteTodo(todo.id)} // Call deleteTodo and pass the todo item's id
              />
              <ListItemText primary={todo.content} secondary={todo.date} />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todos left</p>
  );

  return <div className="todoCollection" style={{ padding: "10px" }}>{todoList}</div>;
};

export default Todos;
