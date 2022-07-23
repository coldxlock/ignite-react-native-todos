import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(taskOld => [...taskOld, data]);

  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    if (id) {
      const updatedTask = tasks.map((task) => {
        if(task.id === id) {
          !task.done ? task.done = true : task.done = false;
        }
        return task
      });

      setTasks(updatedTask);
    }

    //## Forma mais correta 
    // const updatedTask = tasks.map(task => ({...task});

    // const foundItem = updatedTask.find(item => item.id === id);

    // if (!foundItem)
    //   return;

    // foundItem.done = !foundItem.done;
    // setTasks(updatedTask);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const removeTask = tasks.filter(task => task.id !== id)

    setTasks(removeTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})