import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 76px;
  text-align: center;
  padding: 38px 0 16px;
  color: #000000;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    padding: 0 0 8px;
  }
`;

export const RestoreButton = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #4e74f5;
`;
