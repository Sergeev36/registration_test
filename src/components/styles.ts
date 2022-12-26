import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 16px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 99px;
  padding: 0 54px;
  cursor: default;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 0 40px;
  }
`;

export const RouteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const RouteText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #999999;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RouteButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 51px;
  background: #4e74f5;
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    width: 113px;
    height: 40px;
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  width: 496px;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 76px;
  text-align: center;
  padding: 0 0 16px;
  color: #000000;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    padding: 0 0 8px;
  }
`;

export const FormText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 0 0 32px;
  color: #999999;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 0 0 24px;
  }
`;

export const SocialsButtons = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: inherit;
  }
`;

export const SocialsButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 240px;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #000000;

  &:hover {
    background: #f6f8ff;
    border: 1px solid #f6f8ff;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const SocialsButtonText = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
    padding-right: 24px;
  }
`;

export const Or = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  padding: 12px 0;
  color: #999999;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 0 0 32px;
  width: 100%;
`;

export const Input = styled.input<{ border?: string }>`
  border: ${({ border }) => border || "1px solid #e6e6e6"};
  border-radius: 12px;
  padding: 18px 20px;

  ::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #e6e6e6;
  }
`;

export const ErrorForm = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: -16px 0 16px;
  white-space: nowrap;
  color: #FB2424;

`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  font-weight: 700;
  font-size: 16px;
  line-height: 13px;
  color: #ffffff;
  background: #4e74f5;
  border: 0;
  border-radius: 64px;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  background: inherit;
  border: 0;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #999999;
`;
