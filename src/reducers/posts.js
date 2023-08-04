
// reducer is a function = that accept a state and a action
export default reducer = ( posts = [], action ) => {
    switch ( action.type ) {
        case 'FETCH ALL':
            return action.payload;
        case 'CREATE':
            return state;
        default:
            return posts;        
    }
} 