import React from 'react';
import './App.css';
import TodoHeader from './components/todo-header';
import TodoFooter from './components/todo-footer';
import TodoList from './components/todo-list';

function App() {
  return (
    <div className='container'>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
