import React from "react";
import {
  ButtonsContainer, ErrorForm,
  FormButton,
  FormContainer,
  Header,
  Input,
  InputContainer,
  SocialsButtons,
  Wrapper,
} from "../styles";

import { FormText, EmailText, LockImgContainer, CancelButton } from "./styles";
import Logo from "../../Images/LiveDune.svg";
import Lock from "../../Images/lock.svg";
import MobileLogo from "../../Images/LiveDune-mobile.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { emailValidation } from "../constants";

const RestorePassword = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Неверно указан E-mail")
      .required("Введите E-mail")
      .matches(
        emailValidation,
        "Возможно вы ошиблись в указании почтового адреса"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/sent");
    },
  });

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
      <FormContainer onSubmit={formik.handleSubmit}>
        <LockImgContainer>
          <img src={Lock} alt="Lock" />
        </LockImgContainer>
        <FormText>Восстановить пароль</FormText>
        <SocialsButtons></SocialsButtons>
        <EmailText>Введите e-mail, на который регистрировались ранее</EmailText>
        <InputContainer>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            border={formik.errors.email && '1px solid #FB2424'}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <ErrorForm>{formik.errors.email}</ErrorForm>
          )}
        </InputContainer>
        <ButtonsContainer>
          <FormButton>Отправить</FormButton>
          <CancelButton to="/auth">Отменить</CancelButton>
        </ButtonsContainer>
      </FormContainer>
    </Wrapper>
  );
};

export default RestorePassword;
