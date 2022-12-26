import React from "react";
import Logo from "../../Images/LiveDune.svg";
import MobileLogo from "../../Images/LiveDune-mobile.svg";
import {
  Wrapper,
  Header,
  RouteContainer,
  Title,
  InputContainer,
  ButtonsContainer,
  FormButton,
  ExitButton,
  Input,
  ErrorForm,
} from "../styles";
import {
  FormContainer,
  CancelButton,
  FormText,
  FormsWrapper,
  Email,
} from "./styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import { userAuth } from "../../action/authUser.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailValidation } from "../constants";

const NoLetter = () => {
  const dispatch = useDispatch();
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
    },
  });

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
      <FormContainer onSubmit={formik.handleSubmit}>
        <Title>Мне не пришло письмо</Title>
        <FormText>
          Письмо может прийти с задержкой в 5-10 минут. Также проверьте разные
          папки почтового ящика (актуально для gmail.com) и папку "Спам".Если
          письмо все же не пришло, повторите попытку или напишите об этом в
          тех.поддержку <Email>support@livedune.ru</Email> и мы активируем ваш
          аккаунт.
        </FormText>
        <FormsWrapper>
          <InputContainer>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              border={formik.errors.email && "1px solid #FB2424"}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <ErrorForm>{formik.errors.email}</ErrorForm>
            )}
          </InputContainer>
          <ButtonsContainer>
            <FormButton>Отправить заново</FormButton>
            <CancelButton to="/confirm">Отменить</CancelButton>
          </ButtonsContainer>
        </FormsWrapper>
      </FormContainer>
    </Wrapper>
  );
};

export default NoLetter;
