const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.by;
        case 'DECREMENT':
            return state - action.by;
        case 'RESET':
            return 0
        default:
            return state;
    }
};

export default counterReducer;