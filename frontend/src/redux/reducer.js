export const initialState = {
  employees: [],
  toDoList: [],
  assignedTask: [],
  user: [],
};

//Selector

const reducer = (state, action) => {

  const checkUnique = (x) => x.id === action.item.id;
  switch (action.type) {
    case "ADD_TO_TODOLIST":
      if (state.toDoList.some(checkUnique)) {
        return {
          ...state,
          toDoList: [...state.toDoList],
        };
      } else {
        return {
          ...state,
          toDoList: [...state.toDoList, action.item],
        };
      }

      // case "UPDATE_REQUEST":
      //      if()

    case "ADD_TO_EMPLOYEES":
      if (state.employees.some(checkUnique)) {
        return {
          ...state,
          employees: [...state.employees],
        };
      } else {
        return {
          ...state,
          employees: [...state.employees, action.item],
        };
      }

      case "toDoList":
      return {
        ...state,
        toDoList: [],
      };

      case "EMPTY_EMPLOYEES":
      return {
        ...state,
        employees: [],
      };
      case "SET_USER":
      return {
        ...state,
        user: [...state.user , action.user]
      };

    default:
      return state;
  }
};

export default reducer;
