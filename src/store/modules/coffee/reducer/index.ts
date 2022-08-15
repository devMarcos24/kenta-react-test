import {
  ADD_OTHER,
  GET_ALL,
  REMOVE_ONE,
  CHANGE_ONE,
  ADD_OBJECT_TO_CHANGE,
  CLEAN_TO_CHANGE_ITEM,
} from "../actions/actions.types";

const INITIAL_STATE = {
  coffee: [],
  toChangeOrExclude: null,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  console.log(action);
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        coffee: action.payload,
      };

    case ADD_OTHER:
      return {
        ...state,
        coffee: [action.payload, ...state.coffee],
      };
    case REMOVE_ONE:
      return {
        ...state,
        coffee: state.coffee.filter(
          (item: any) => item.id !== action.payload.id
        ),
        toChangeOrExclude: null,
      };
    case CHANGE_ONE:
      return {
        ...state,
        coffee: state.coffee.map((item: any) => {
          if (item.id === action.payload.id) {
            return { ...action.payload, ...action.changed };
          }

          return item;
        }),
        toChangeOrExclude: null,
      };
    case ADD_OBJECT_TO_CHANGE:
      return {
        ...state,
        toChangeOrExclude: action.payload,
      };

    case CLEAN_TO_CHANGE_ITEM:
      return {
        ...state,
        toChangeOrExclude: null,
      };

    default:
      return state;
  }
};

export default reducer;
