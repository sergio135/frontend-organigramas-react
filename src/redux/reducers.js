import { combineReducers } from 'redux';

function CDReducer (state = {}, action) {
    switch (action.type) {
    case 'CD-AJAX':
        const copy = Object.assign(state, action.payload);
        return copy;
    default:
        return state;
    }
}

function CMDReducer (state = {}, action) {
    switch (action.type) {
    case 'CMD-AJAX':
        const copy = Object.assign(state, action.payload);
        return copy;
    default:
        return state;
    }
}

function CMIReducer (state = {}, action) {
    switch (action.type) {
    case 'CMI-AJAX':
        const copy = Object.assign(state, action.payload);
        return copy;
    default:
        return state;
    }
}

function CNReducer (state = {}, action) {
    switch (action.type) {
    case 'CN-AJAX':
        const copy = Object.assign(state, action.payload);
        return copy;
    default:
        return state;
    }
}

function COReducer (state = {}, action) {
    switch (action.type) {
    case 'CO-AJAX':
        const copy = Object.assign(state, action.payload);
        return copy;
    default:
        return state;
    }
}

const reducers = combineReducers({ CDReducer, CMDReducer, CMIReducer, CNReducer, COReducer, });
export default reducers;