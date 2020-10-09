import React from 'react';
import './index.scss';

const TodoFooter = () => {
    return (
        <div className='footer'>
            <p>Double-click to edit a todo</p>
            <p>Created by <a href="http://todomvc.com">petehunt</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </div>
    );
}

export default TodoFooter;