import { combineReducers } from 'redux';

function CDReducer (state = {}, action) {
    switch (action.type) {
    case 'CD-AJAX':
        return Object.assign({}, {
            data: {
                id:action.payload.id, 
                puesto:action.payload.nombre, 
                padre:action.payload.padre, 
                page:action.payload.pagina 
            },
            user: {
                userName:action.payload.user.nombre, 
                user:action.payload.user.user
            },
            users: action.payload.usuarios.map(rest => {
                return {
                    userName: rest.nombre,
                    user: rest.user
                };
            })
        });
        
    default:
        return state;
    }
}

function CMDReducer (state = [], action) {
    switch (action.type) {
    case 'CMD-AJAX':
        return Object.assign({}, {
            data: {
                id:action.payload.id, 
                puesto:action.payload.nombre, 
                padre:action.payload.padre, 
                page:action.payload.pagina 
            },
            user: {
                userName:action.payload.user.nombre, 
                user:action.payload.user.user
            },
            users: action.payload.usuarios.map(rest => {
                return {
                    userName: rest.nombre,
                    user: rest.user
                };
            })
        });

    default:
        return state;
    }
}

function CMIReducer (state = [], action) {
    switch (action.type) {
    case 'CMI-AJAX':
        return Object.assign({}, {
            data: {
                id:action.payload.id, 
                puesto:action.payload.nombre, 
                padre:action.payload.padre, 
                page:action.payload.pagina 
            },
            user: {
                userName:action.payload.user.nombre, 
                user:action.payload.user.user
            },
            users: action.payload.usuarios.map(rest => {
                return {
                    userName: rest.nombre,
                    user: rest.user
                };
            })
        });

    default:
        return state;
    }
}

function CNReducer (state = [], action) {
    switch (action.type) {
    case 'CN-AJAX':
        return Object.assign([], action.payload.map(rest => {
            return {
                data: {
                    id:rest.id, 
                    puesto:rest.nombre, 
                    padre:rest.padre, 
                    page:rest.pagina 
                },
                user: {
                    userName:rest.user.nombre, 
                    user:rest.user.user
                },
                users: rest.usuarios.map(rest => {
                    return {
                        userName: rest.nombre,
                        user: rest.user
                    };
                })
            };
        }));

    default:
        return state;
    }
}

function COReducer (state = [], action) {
    switch (action.type) {
    case 'CO-AJAX':
        return Object.assign({}, state, {
            data: {
                id:action.payload.id, 
                puesto:action.payload.nombre, 
                padre:action.payload.padre, 
                page:action.payload.pagina 
            },
            user: {
                userName:action.payload.user.nombre, 
                user:action.payload.user.user
            },
            users: action.payload.usuarios.map(rest => {
                return {
                    userName: rest.nombre,
                    user: rest.user
                };
            })
        });

    case 'CO-AJAX-CHILD':
        return Object.assign([], state, {child: action.payload.map(rest => {
            return {
                data: {
                    id:rest.id, 
                    puesto:rest.nombre, 
                    padre:rest.padre, 
                    page:rest.pagina 
                },
                user: {
                    userName:rest.user.nombre, 
                    user:rest.user.user
                },
                users: rest.usuarios.map(rest => {
                    return {
                        userName: rest.nombre,
                        user: rest.user
                    };
                })
            };
        })});

    default:
        return state;
    }
}

function CTReducer (state = [], action) {
    switch (action.type) {
    case 'CT-AJAX':
        let comp = Array.isArray(action.payload);
        if (!comp) {
            action.payload = [action.payload];
        }
        return Object.assign([], action.payload.map(rest => {
            return {
                data: {
                    id:rest.id, 
                    puesto:rest.nombre, 
                    padre:rest.padre, 
                    page:rest.pagina 
                },
                user: {
                    userName:rest.user.nombre, 
                    user:rest.user.user
                },
                users: rest.usuarios.map(rest => {
                    return {
                        userName: rest.nombre,
                        user: rest.user
                    };
                })
            };
        }));

    default:
        return state;
    }
}

const reducers = combineReducers({ CDReducer, CMDReducer, CMIReducer, CNReducer, COReducer, CTReducer });
export default reducers;