import React from 'react';
import TodoInput from './todo-input';
import TodoItems from './todo-items';
import TodoCards from './todo-cards';
import TodoOperations from './todo-operations';

const TodoList = () => {
    return (
        <div>
            <TodoInput />
            <TodoItems />
            <TodoOperations />
            <TodoCards />
        </div>
    );
}

export default TodoList;