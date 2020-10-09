import {init, RematchRootState, RematchDispatch} from '@rematch/core';
import {models, RootModel} from './models/index';

const store = init({models})

export type MyState = RematchRootState<RootModel>;
export type MyDispatch = RematchDispatch<RootModel>;
export default store;