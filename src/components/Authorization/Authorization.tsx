import React from "react";
import Logo from "../../Images/LiveDune.svg";
import MobileLogo from "../../Images/LiveDune-mobile.svg";
import fbImg from "../../Images/fb.svg";
import googleImg from "../../Images/google.svg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../action/authUser.action";
import { emailValidation } from "../constants";
import { IUser } from "../../reducers/types";
import {
  Wrapper,
  Header,
  RouteContainer,
  RouteText,
  RouteButton,
  FormContainer,
  FormText,
  SocialsButtons,
  SocialsButton,
  SocialsButtonText,
  Or,
  InputContainer,
  Input,
  ErrorForm,
  ButtonsContainer,
  FormButton,
} from "../styles";
import { Title, RestoreButton } from "./styles";


const Authorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(
    (state: { usersReducer: { users: IUser[] } }) => state.usersReducer.users
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Неверно указан E-mail")
      .required("Введите E-mail")
      .matches(
        emailValidation,
        "Возможно вы ошиблись в указании почтового адреса"
      ),
    password: Yup.string()
      .min(8, "Пароль должен содержать 8 символов")
      .required("Введите пароль")
      .matches(/\d+/, "Пароль должен содержать хотя бы одну цифру")
      .matches(/^(?=.*[a-zA-Z])/, "Пароль должен содержать хотя бы одну букву"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (user) {
        dispatch(userAuth(user));
        navigate("/confirm");
      } else {
        console.log("not this user!");
      }
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
        <RouteContainer>
          <RouteText>У вас нет аккаунта?</RouteText>
          <RouteButton to="/registration">Регистрация</RouteButton>
        </RouteContainer>
      </Header>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Title>Войти</Title>
        <FormText>Добро пожаловать, рады видеть вас снова 👋</FormText>
        <SocialsButtons>
          <SocialsButton>
            <img src={fbImg} alt="fbImg" />
            <SocialsButtonText>Войти через Facebook</SocialsButtonText>
          </SocialsButton>
          <SocialsButton>
            <img src={googleImg} alt="googleImg" />
            <SocialsButtonText>Войти через Google</SocialsButtonText>
          </SocialsButton>
        </SocialsButtons>
        <Or>или</Or>
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
          <Input
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="true"
            border={formik.errors.email && "1px solid #FB2424"}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <ErrorForm>{formik.errors.password}</ErrorForm>
          )}
        </InputContainer>
        <ButtonsContainer>
          <FormButton>Войти в аккаунт</FormButton>
          <RestoreButton to="/restore">Забыли пароль?</RestoreButton>
        </ButtonsContainer>
      </FormContainer>
    </Wrapper>
  );
};

export default Authorization;
