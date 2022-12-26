import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../Images/LiveDune.svg";
import MobileLogo from "../../Images/LiveDune-mobile.svg";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../action/authUser.action";
import { IUser } from "../../reducers/types";
import {
  Header,
  RouteContainer,
  Wrapper,
  FormButton,
  ExitButton,
} from "../styles";
import {
  FormContainer,
  Title,
  FormText,
  NoLetterButton,
  ButtonsContainer,
} from "./styles";

const ConfirmEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector(
    (state: { authReducer: { user: IUser } }) => state.authReducer.user.username
  );

  const handleExit = () => {
    dispatch(userAuth({ username: "", email: "", password: "", promo: "" }));
    navigate("/auth");
  };

  return (
    <Wrapper>
      <Header>
        <img
          src={Logo}
          srcSet={`${MobileLogo} 768w`}
          sizes="(max-width: 768px) 768px"
          alt="Logo"
        />
        <RouteContainer>
          <ExitButton onClick={handleExit}>Выйти</ExitButton>
        </RouteContainer>
      </Header>
      <FormContainer>
        <Title>Подтвердите ваш e-mail</Title>
        <FormText>
          {username}, на ваш E-mail отправлено письмо со ссылкой для
          подтверждения. Перейдите по ней, чтобы активировать вашу учетную
          запись и получить 7 дней бесплатного доступа.
        </FormText>
        <ButtonsContainer>
          <FormButton type="submit">Перейти к почте</FormButton>
          <NoLetterButton to="/noLetter">Мне не пришло письмо</NoLetterButton>
        </ButtonsContainer>
      </FormContainer>
    </Wrapper>
  );
};

export default ConfirmEmail;
