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

//     case "UPDATE_QUANTITY":
//       const target = state.basket.find((x) => x.id === action.item.id);
//       target.quantity = action.item.quantity;
//       return {
//         ...state,
//       };

//     case "EMPTY_BASKET":
//       return {
//         ...state,
//         basket: [],
//       };

//     case "REMOVE_FROM_BASKET":
//       const index = state.basket.findIndex(
//         (basketItem) => basketItem.id === action.item.id
//       );
//       let newBasket = [...state.basket];

//       if (index >= 0) {
//         newBasket.splice(index, 1);
//       } else {
//         console.warn(
//           `Cant remove product (id: ${action.item.id}) as its not in basket`
//         );
//       }
//       return {
//         ...state,
//         basket: newBasket,
//       };

//     case "REMOVE_FROM_SAVED":
//       const i = state.saved.findIndex(
//         (savedItem) => savedItem.id === action.item.id
//       );
//       let newSaved = [...state.saved];

//       if (i >= 0) {
//         newSaved.splice(i, 1);
//       } else {
//         console.warn(
//           `Cant remove product (id: ${action.item.id}) as its not in saved`
//         );
//       }
//       return {
//         ...state,
//         saved: newSaved,
//       };


    default:
      return state;
  }
};

export default reducer;
