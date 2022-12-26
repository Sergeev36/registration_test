import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  width: 689px;
  margin: 0 auto;
  padding: 163px 0 0;

  @media (max-width: 768px) {
    width: 343px;
    padding: 121px 0 0;
  }
`;

export const FormText = styled.div`
  width: 562px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
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

export const Title = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 76px;
  text-align: center;
  padding: 0 0 16px;
  color: #000000;

  @media (max-width: 768px) {
    width: 272px;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    padding: 0 0 8px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 354px;
`;

export const NoLetterButton = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  color: #4e74f5;
`;
