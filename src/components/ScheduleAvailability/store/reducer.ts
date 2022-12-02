const daysOfTheWeek = [
  { day: 'Monday', selected: false },
  { day: 'Tuesday', selected: false },
  { day: 'Wednesday', selected: false },
  { day: 'Thursday', selected: false },
  { day: 'Friday', selected: false },
  { day: 'Saturday', selected: false },
  { day: 'Sunday', selected: false },
];

export const initialState = {
  daysOfTheWeek,
};

type ACTIONTYPE =
  | { type: 'TOGGLE_SELECTED'; payload: number }
  | { type: 'TOGGLE_ALL'; payload: boolean };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
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
          selected: action.payload,
        })),
      };
    default:
      console.error('This action type does not exist');
      return state;
  }
};

export { reducer };
