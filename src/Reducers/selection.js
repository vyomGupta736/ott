const INITIAL_STATE = {
    movie: {},
};

export default selection = (state = INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case "selected":
            return {...state, movie : {...actions.payload}}
        case "error":
            return INITIAL_STATE;
        default:
            return state;
    }
}