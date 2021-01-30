function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SELECTED':
      return {
        ...state,
        daysOfTheWeek: state.daysOfTheWeek.map((day, idx) =>
          action.payload === idx ? { ...day, selected: !day.selected } : day
        ),
      };
    case 'TOGGLE_ALL':
      return {
        ...state,
        daysOfTheWeek: state.daysOfTheWeek.map((day) => ({
          ...day,
          selected: true,
        })),
      };
    default:
      return;
  }
}

export { reducer };