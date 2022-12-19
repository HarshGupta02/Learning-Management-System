export const initialState = null;

export const reducer = (state, action) => {
    if(action.type === "USER") return action.payload;
    // so the retured state will be the new state and so the state changes
    // each time the dispatch is called.
    return state;
}