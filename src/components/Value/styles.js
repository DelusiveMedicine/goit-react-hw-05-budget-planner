import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 8px 24px;
  color: ${props => (props.isPositive ? '#388E3C' : '#D32F2F')};
  user-select: none;
`;

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
`;

export const Amount = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 48px;
`;
