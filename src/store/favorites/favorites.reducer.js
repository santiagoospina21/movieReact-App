import { createSlice } from "@reduxjs/toolkit";

const addLikeCard = (state, likeCard) => {
  if (state.some((card) => card.id === likeCard.id)) {
    return state.filter((card) => card.id !== likeCard.id);
  } else {
    return [...state, { ...likeCard, isWatched: false }];
  }
};

const removeLikeCard = (state, likeCard) => {
  const existingCard = state.find((card) => card.id === likeCard.id);

  return state.filter((card) => card.id !== existingCard.id);
};

const INITIAL_STATE = {
  openModal: false,
  likeCards: [],
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
    setIsWatched(state, action) {
      const { id, isWatched } = action.payload;
      const card = state.likeCards.find((c) => c.id === id);
      if (card) {
        card.isWatched = isWatched;
      }
    },
    setFavorites(state, action) {
      // Esta acción se utilizará para cargar los "favorites" desde Firestore
      state.likeCards = action.payload;
    },
  },
});

export const {
  setOpenModal,
  addCards,
  removeCards,
  setIsWatched,
  setFavorites,
} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
