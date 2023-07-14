import { createSlice } from "@reduxjs/toolkit";

const addLikeCard = (state, likeCard) => {
  if (state.includes(likeCard.id)) {
    return state.filter((card) => card.id !== likeCard.id);
  } else {
    return [...state, likeCard];
  }
};

const removeLikeCard = (state, likeCard) => {
  const existingCard = state.find((card) => card.id === likeCard.id);

  return state.filter((card) => card.id !== existingCard.id);
};

const INITIAL_STATE = {
  openModal: false,
  likeCards: [],
  isLiked: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
    addCards(state, action) {
      state.likeCards = addLikeCard(state.likeCards, action.payload);
    },
    removeCards(state, action) {
      state.likeCards = removeLikeCard(state.likeCards, action.payload);
    },
    setIsLiked(state, action) {
      state.isLiked = action.payload;
    },
  },
});

export const { setOpenModal, addCards, removeCards, setIsLiked } =
  favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
