/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
    Box, 
    Checkbox, 
    Flex, 
    Heading, 
    IconButton, 
    Input, 
    Stack, 
    useColorModeValue 
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
  
  // A single To-do item component
  const TodoItem = ({ task, onDelete, onToggle }: any) => (
    <Flex justifyContent="space-between" alignItems="center" p={2} bg={useColorModeValue("gray.50", "gray.700")} borderRadius="md">
      <Checkbox 
        isChecked={task.isCompleted} 
        onChange={() => onToggle(task.id)} 
        flexGrow={1}
      >
        {task.text}
      </Checkbox>
      <IconButton 
        icon={<DeleteIcon />} 
        onClick={() => onDelete(task.id)} 
        size="sm" 
        variant="ghost" 
        aria-label="Delete task"
      />
    </Flex>
  );
  
  // Main To-do List Component
  const TodoList = () => {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Set up subdomain structure', isCompleted: false },
      { id: 2, text: 'Design the main platform interface', isCompleted: false },
      { id: 3, text: 'Implement backend infrastructure', isCompleted: false },
      { id: 4, text: 'Clippy V2', isCompleted: false },
    ]);
    const [newTask, setNewTask] = useState("");
  
    const addTask = () => {
      if (newTask.trim() !== "") {
        const newTaskObj = {
          id: tasks.length + 1,
          text: newTask,
          isCompleted: false,
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask("");
      }
    };
  
    const deleteTask = (id: number) => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    };
  
    const toggleTask = (id: number) => {
      const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      );
      setTasks(updatedTasks);
    };
  
    return (
      <Box
        w="100%"
        maxW="500px"
        mx="auto"
        mt={10}
        p={5}
        bg={useColorModeValue("black", "gray.800")}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading mb={6} fontSize="2xl" textAlign="center">
          DevIndex To-Do List
        </Heading>
        <Stack spacing={4}>
          {tasks.map(task => (
            <TodoItem 
              key={task.id} 
              task={task} 
              onDelete={deleteTask} 
              onToggle={toggleTask} 
            />
          ))}
  
          <Flex mt={4}>
            <Input 
              placeholder="Add a new task..." 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)} 
            />
            <IconButton 
              icon={<AddIcon />} 
              onClick={addTask} 
              ml={2} 
              aria-label="Add task" 
            />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
  export default TodoList;
  