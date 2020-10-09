import { Models } from '@rematch/core';
import todos from './todos';
import status from './status';

export interface RootModel extends Models{
    todos: typeof todos;
    status: typeof status
}

export const models: RootModel = {todos, status}