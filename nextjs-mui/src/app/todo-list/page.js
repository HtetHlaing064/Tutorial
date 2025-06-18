"use client";

import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [changedTask, setChangedTask] = useState("");
  const [taskIndex, setTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const updateTask = () => {
    if (changedTask.trim() && taskIndex !== null) {
      const updated = [...tasks];
      updated[taskIndex] = changedTask;
      setTasks(updated);
      setChangedTask("");
      setTaskIndex(null);
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index != indexToRemove)
    );
  };

  // const removeTask = (indexToRemove) => {
  //   setTasks(tasks.filter((_, index) => index !== indexToRemove));
  //   if (indexToRemove === taskIndex) {
  //     setTaskIndex(null);
  //     setChangedTask("");
  //   }
  // };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Create Task */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" size="large" onClick={addTask}>
          Add Task
        </Button>
      </Stack>

      {/* Update Task */}
      {taskIndex !== null && (
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Update Task"
            value={changedTask}
            onChange={(e) => setChangedTask(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={updateTask}>
            Update
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setTaskIndex(null);
              setChangedTask("");
            }}
          >
            Cancel
          </Button>
        </Stack>
      )}

      {/* Task List Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task}</TableCell>
                  <TableCell align="right">
                    {/* <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="flex-end"
                    > */}
                      <Button
                        variant="contained"
                        color="info"
                        onClick={() => {
                          setTaskIndex(index);
                          setChangedTask(task);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => removeTask(index)}
                      >
                        Remove
                      </Button>
                    {/* </Stack> */}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2}>No tasks available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
