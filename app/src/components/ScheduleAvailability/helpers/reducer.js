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
      // console.log(action.payload)
      return {
        ...state,
        daysOfTheWeek: state.daysOfTheWeek.map((day) => ({
          ...day,
          selected: action.payload,
        })),
      };
    default:
      return;
  }
}

export { reducer };