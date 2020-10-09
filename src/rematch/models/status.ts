import {createModel} from '@rematch/core';

const status = createModel({
    state: 'All',
    reducers: {
        changeStatus: (prevState: string, payload: string) => payload,
    }
});

export default status;