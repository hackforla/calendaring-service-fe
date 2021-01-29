function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SELECTED':
      return {
        ...state,
        weekDays: state.weekDays.map((day, idx) =>
          action.payload === idx ? { ...day, selected: !day.selected } : day
        ),
      };
    case 'TOGGLE_ALL':
      return {
        ...state,
        weekDays: state.weekDays.map((day) => ({
          ...day,
          selected: !day.selected,
        })),
      };
    default:
      return;
  }
}

export { reducer };