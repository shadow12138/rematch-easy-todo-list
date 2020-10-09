import React, {useRef} from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { MyDispatch } from '../../../rematch/store';

const TodoInput = () => {
    const dispatch: MyDispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            if(inputRef && inputRef.current) {
                const value = inputRef.current.value;
                dispatch.todos.add(value);
                inputRef.current.value = '';
            }
        }
    }

    return (
        <div className='input-container'>
            <input placeholder='What needs to be done?' onKeyUp={handleKeyUp} ref={inputRef}/>
        </div>
    );
}

export default TodoInput;