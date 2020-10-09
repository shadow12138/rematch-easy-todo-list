import React, {useState, FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MyState, MyDispatch} from '../../../rematch/store';
import './index.scss';
import { TodoBean } from '../../../bean/TodoBean';

interface TodoItemProps {
    todoBean: TodoBean;
    index: number;
}

const TodoItem : FC<TodoItemProps> = (props: TodoItemProps) => {
    const [showDelete, setShowDelete] = useState(false);
    const dispatch: MyDispatch = useDispatch();

    const toggle = () => {
        dispatch.todos.toggle(props.index);
    }

    const handleMouseOver = () => {
        setShowDelete(true);
    }

    const handleMouseOut = () => {
        setShowDelete(false);
    }

    const deleteItem = () => {
        dispatch.todos.remove(props.index);
    }

    return (
        <div className='todo-item' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className={`checkbox ${props.todoBean.finished ? 'checked': 'normal'}`}>
                <img className={props.todoBean.finished ? 'checked' : 'normal'} onClick={toggle}/>
            </div>
            <div className={`todo-content ${props.todoBean.finished ? 'checked': 'normal'}`}>{props.todoBean.name}</div>
            <img className='delete-item' style={{display: `${showDelete ? 'initial' : 'none'}`}} onClick={deleteItem}/>
        </div>
    );
}

const TodoItems = () => {
    const todos = useSelector((state: MyState)=>state.todos);
    const status = useSelector((state: MyState)=>state.status);

    return (
        <div className='todo-items'>
            {
                todos.filter((item: TodoBean) => {
                    if(status === 'All')
                        return true;
                    if(status === 'Active')
                        return !item.finished;
                    return item.finished;
                }).map((item: TodoBean, index: number) => {
                    return <TodoItem todoBean={item} key={index} index={index}/>
                })
            }
        </div>
    );
}

export default TodoItems;