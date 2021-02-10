const INITIAL_STATE = {
    toprated : [],
    popular : [],
    upcoming : [],
    latest : []
};

export default MovieReducer = (state = INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case "errorloading":
            return {...state}
        case "loaded":
            return {...state, [actions.payload.type] : [...actions.payload.data]}
        default:
            return state;
    }
}