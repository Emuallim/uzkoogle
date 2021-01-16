export const initialState = {
  term: null,
  // when u type in "coding" you want this "null" to change into "coding" because this is where data is gonna live
}

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  // when u type in & hit Enter, actionTypes dispatches an action which says "change/set the search term"
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term
      };
    default:
      return state;
  }
}

export default reducer;