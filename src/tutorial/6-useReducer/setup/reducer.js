export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];

    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Item added.",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value.",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      people: state.people.filter((person) => {
        return person.id !== action.payload;
      }),
      isModalOpen: true,
      modalContent: "Item removed.",
    };
  }

  throw new Error("No matching action type.");
};
