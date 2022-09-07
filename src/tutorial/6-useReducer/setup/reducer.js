export const reducer = (state, action) => {
  if (action.type === "ITEM_ADDED") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "öğe eklendi",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Lütfen bir değer giriniz",
    };
  }
  if (action.type === "MODAL_KAPAT") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "ÖGEYİ_KAPAT") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("Eşleşen eylem türü yok");
};
