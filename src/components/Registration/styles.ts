import styled from "styled-components";

export const OfferContainer = styled.div`
  display: flex;
  padding: 0 0 24px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const PromoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  padding: 16px 0 24px;
  color: #4e74f5;
`;

export const OfferText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;

export const OfferButton = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  color: #4e74f5;
`;
