import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 16 }}>
      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        style={{ marginBottom: 16 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddTask}>
        Добавить
      </Button>

      <List style={{ marginTop: 24 }}>
        {tasks.map((item, index) => (
          <Card key={index} style={{ marginBottom: 12 }}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <ListItemText primary={item} />
              <IconButton onClick={() => handleDeleteTask(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </List>
    </div>
  );
};

export default TodoList;

