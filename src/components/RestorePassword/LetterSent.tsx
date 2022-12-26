import React from "react";
import {
  ButtonsContainer,
  FormButton,
  FormContainer,
  Header,
  Wrapper,
} from "../styles";

import { FormText, EmailText, LetterImgContainer } from "./styles";
import Logo from "../../Images/LiveDune.svg";
import Letter from "../../Images/letter.svg";
import MobileLogo from "../../Images/LiveDune-mobile.svg";
import {useNavigate} from "react-router-dom";


const LetterSent = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/auth")
  }

  return (
    <Wrapper>
      <Header>
        <img
          src={Logo}
          srcSet={`${MobileLogo} 768w`}
          sizes="(max-width: 768px) 768px"
          alt="Logo"
        />
      </Header>
        <FormContainer>
          <LetterImgContainer>
            <img src={Letter} alt="Letter" />
          </LetterImgContainer>
          <FormText>Письмо отправлено</FormText>
          <EmailText>
            На указанный вами e-mail было отправлено письмо для смены пароля
          </EmailText>
          <ButtonsContainer>
            <FormButton onClick={handleExit}>Вернуться на главную</FormButton>
          </ButtonsContainer>
        </FormContainer>
    </Wrapper>
  );
};

export default LetterSent;