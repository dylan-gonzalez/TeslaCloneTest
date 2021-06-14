export const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_blur":
      return {
        ...state,
        blur_active: !state.blur_active,
      };
    case "toggle_startup":
      return {
        ...state,
        startup_active: !state.startup_active
      }
    default:
      return state;
  }
};

export const initialState = {
    blur_active: false,
    startup_active: true,
}