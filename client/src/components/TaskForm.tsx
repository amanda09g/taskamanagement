// client/src/components/TaskForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm: React.FC = () => {
  const [taskText, setTaskText] = useState<string>('');

  const handleAddTask = async () => {
    if (taskText.trim()) {
      try {
        await axios.post('http://localhost:5000/tasks', { text: taskText });
        setTaskText('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
