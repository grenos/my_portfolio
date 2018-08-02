const defaultState = {
  toggle: null
};

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_STATE':
      return {
        ...state,
        toggle: !state.toggle
      };
    case 'TOGGLE_STATE_TRUE':
      return {
        ...state,
        toggle: true
      };
    case 'TOGGLE_STATE_FALSE':
      return {
        ...state,
        toggle: false
      };
    default:
      return state;
  }
};

export default Reducer;
