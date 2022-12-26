import styled from "styled-components";
import { Link } from "react-router-dom";

export const LockImgContainer = styled.div`
  padding: 75px 0 48px;
  @media (max-width: 768px) {
    padding: 71px 0 32px;
  }
`;

export const FormText = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const EmailText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #999999;
  padding: 8px 0 32px;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 293px;
    font-size: 14px;
    line-height: 24px;
    padding: 8px 0 24px;
  }
`;

export const CancelButton = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #999999;
  text-decoration: none;
`;

export const LetterImgContainer = styled.div`
  padding: 97px 0 70px;
  
  @media (max-width: 768px) {
    padding: 71px 0 32px;
  }
`;
