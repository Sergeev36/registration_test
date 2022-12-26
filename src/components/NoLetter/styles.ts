import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  width: 675px;
  margin: 0 auto;
  padding: 132px 0 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 0 0;
  }
`;

export const FormText = styled.div`
  width: 674px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  padding: 0 0 32px;
  color: #999999;
  text-align: center;

  @media (max-width: 768px) {
    width: 293px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 0 0 24px;
  }
`;

export const FormsWrapper = styled.div`
  width: 420px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Email = styled.span`
  color: #4e74f5;
`;
export const CancelButton = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #999999;
`;
