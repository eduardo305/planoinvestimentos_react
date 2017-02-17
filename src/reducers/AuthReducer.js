const INITIAL_STATE = {
    authenticated: false,
    error: '',
    message: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}