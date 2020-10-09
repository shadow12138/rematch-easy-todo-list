import React from 'react';
import './index.scss';
import {useSelector, useDispatch} from 'react-redux';
import {MyState, MyDispatch} from '../../../rematch/store';
import { TodoBean } from '../../../bean/TodoBean';

const TodoOperations = () => {
    const status = useSelector((state: MyState)=>state.status);
    const todos = useSelector((state: MyState)=>state.todos);
    const dispatch: MyDispatch = useDispatch();

    const handleClick = (payload: string) => {
        dispatch.status.changeStatus(payload);
    }

    return (
        <div className='todo-operations'>
            <div>{todos.filter((item: TodoBean)=>!item.finished).length} items left</div>
            <div className='filters'>
                {
                    ['All', 'Active', 'Completed'].map((item: string, index: number) => {
                        return <div key={index} className={item === status ? 'checked' : 'normal'} onClick={()=>{handleClick(item)}}>{item}</div>
                    })
                }
            </div>
        </div>
    );
}

export default TodoOperations;