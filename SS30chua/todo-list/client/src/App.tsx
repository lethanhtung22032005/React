import React from 'react'
import InputTask from './componets/InputTask'
import Task from './componets/Task'
import TaskStatus from './componets/TaskStatus'

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <InputTask></InputTask>
      <Task></Task>
      <TaskStatus></TaskStatus>
      <button>Xóa công việc hoàn thành</button>
      <button>Xóa tất cả các công việc</button>
    </div>
  )
}

export default App