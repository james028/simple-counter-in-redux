import { createStore } from 'redux'

const initialState = {
    count: 1,
    inpValue: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
        case 'DECREMENT':
            return Object.assign({}, state, { count: state.count - 1 });
        case 'GET_VALUE':
            return Object.assign({}, state, { inpValue: action.text });
        default: 
            return state;
    }
}

const store = createStore(reducer);

export default store;
