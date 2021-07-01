import React, { useState } from 'react';

import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    };

    setTasks(x => [...x, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(x => x.map(y => y.id === id ? {...y, done: !y.done } : y));
  }

  function handleRemoveTask(id: number) {
    setTasks(x => x.filter(y => y.id !== id));
  }

  return (
    <View style={{ flex: 1, backgroundColor: isDarkTheme ? '#1F1F1F' : '#fff' }}>
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

      <TodoInput isDarkTheme={isDarkTheme} addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        isDarkTheme={isDarkTheme} 
      />
    </View>
  )
}