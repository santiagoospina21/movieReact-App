import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  ModalContainer,
  ModalOverlay,
  CloseSymbol,
  ContainerSymbol,
  LikeImg,
  TitleModal,
  SpanModal,
  ButtonModal,
} from "./modal.styles";

import { selectOpenModal } from "../../store/favorites/favorites.selector";
import { setOpenModal } from "../../store/favorites/favorites.reducer";

const Modal = () => {
  const dispatch = useDispatch();

  const openModal = useSelector(selectOpenModal);

  const onHandlerModal = () => {
    dispatch(setOpenModal(false));
  };

  return (
    <ModalOverlay openModal={openModal}>
      <ModalContainer>
        <ContainerSymbol onClick={onHandlerModal}>
          <CloseSymbol />
        </ContainerSymbol>
        <LikeImg />
        <TitleModal>It has been added to favorites </TitleModal>
        <SpanModal>
          Continue exploring your favorite movies and series.
        </SpanModal>
        <ButtonModal>Go to Favorites</ButtonModal>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default Modal;
