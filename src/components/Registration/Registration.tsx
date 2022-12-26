import React, { useState } from "react";
import Logo from "../../Images/LiveDune.svg";
import MobileLogo from "../../Images/LiveDune-mobile.svg";
import fbImg from "../../Images/fb.svg";
import googleImg from "../../Images/google.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { userAdded } from "../../action/addedUser.action";
import { userAuth } from "../../action/authUser.action";
import * as Yup from "yup";
import { emailValidation } from "../constants";
import { IUser } from "../../reducers/types";
import {
  Wrapper,
  Header,
  RouteContainer,
  RouteText,
  RouteButton,
  FormContainer,
  Title,
  FormText,
  SocialsButtons,
  SocialsButton,
  SocialsButtonText,
  Or,
  InputContainer,
  Input,
  ButtonsContainer,
  FormButton,
  ErrorForm,
} from "../styles";
import { OfferContainer, PromoText, OfferText, OfferButton } from "./styles";

const Registration = () => {
  const navigate = useNavigate();
  const [promo, setPromo] = useState(false);
  const [emailError, setEmailError] = useState("");

  const users = useSelector(
    (state: { usersReducer: { users: IUser[] } }) => state.usersReducer.users
  );

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Введите имя"),
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
      username: "",
      email: "",
      password: "",
      promo: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setEmailError("");
      const user = users.find(
        (user) => user.email.toLowerCase() === values.email.toLowerCase()
      );
      if (user) {
        setEmailError("Пользователь с таким e-mail уже зарегистрирован");
      } else {
        const { username, email, password, promo } = values;
        dispatch(userAdded([{ username, email, password, promo }]));
        dispatch(userAuth({ username, email, password, promo }));
        navigate("/confirm");
      }
    },
  });

  const handleResetError = () => {
    emailError && setEmailError("");
  };

  const handleSetPromo = () => {
    setPromo(true);
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
          <RouteText>Уже есть аккаунт?</RouteText>
          <RouteButton to="/auth">Войти</RouteButton>
        </RouteContainer>
      </Header>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Title>Регистрация</Title>
        <FormText>
          Зарегистрируйся и получи доступ к аналитике аккаунтов.
        </FormText>
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
            name="username"
            type="text"
            placeholder="Имя"
            border={formik.errors.username && "1px solid #FB2424"}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.username && (
            <ErrorForm>{formik.errors.username}</ErrorForm>
          )}
          <Input
            name="email"
            type="email"
            placeholder="Email"
            border={(emailError || formik.errors.email) && "1px solid #FB2424"}
            onChange={formik.handleChange}
            value={formik.values.email}
            onClick={handleResetError}
          />
          {formik.errors.email && formik.touched.email && (
            <ErrorForm>{formik.errors.email}</ErrorForm>
          )}
          {emailError && <ErrorForm>{emailError}</ErrorForm>}
          <Input
            name="password"
            type="password"
            autoComplete="false"
            placeholder="Пароль"
            border={formik.errors.password && "1px solid #FB2424"}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <ErrorForm>{formik.errors.password}</ErrorForm>
          )}
          {promo ? (
            <Input
              name="promo"
              type="text"
              placeholder="Промокод"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.promo}
            />
          ) : (
            <PromoText onClick={handleSetPromo}>У меня есть промокод</PromoText>
          )}
        </InputContainer>
        <ButtonsContainer>
          <FormButton type="submit">Создать аккаунт</FormButton>
          <OfferContainer>
            <OfferText>Создавая аккаунт, я согласен с&nbsp;</OfferText>
            <OfferButton>условиями оферты</OfferButton>
          </OfferContainer>
        </ButtonsContainer>
      </FormContainer>
    </Wrapper>
  );
};

export default Registration;
