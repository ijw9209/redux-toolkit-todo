import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {
  return (
    <>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </>
  );
}

export default App;
