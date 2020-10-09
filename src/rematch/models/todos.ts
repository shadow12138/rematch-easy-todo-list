import { createModel } from '@rematch/core';
import { TodoBean } from '../../bean/TodoBean';

const getDefaultTodos = (): TodoBean[] => {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    return todos === null ? [] : JSON.parse(todos); 
}

export const delay = (ms: number): Promise<void> =>
	new Promise(resolve => setTimeout(resolve, ms))

const todos = createModel({
    state: getDefaultTodos(),
    reducers: {
        add: (prevState: TodoBean[], payload: string) => {
            const todos = [...prevState, { name: payload, finished: false }]
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        },
        remove: (prevState: TodoBean[], payload: number) => {
            const todos = prevState.slice();
            todos.splice(payload, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        },
        toggle: (prevState: TodoBean[], payload: number) => {
            const todos = prevState.slice();
            todos[payload].finished = !todos[payload].finished;
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    }
});

export default todos;