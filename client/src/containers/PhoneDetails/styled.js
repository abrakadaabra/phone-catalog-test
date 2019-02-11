import styled from 'styled-components';
import CardMUI from '@material-ui/core/Card';
const size16x9 = 56.25;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled(CardMUI)`
  max-width: 600px;

  .card-media {
    height: 0;
    padding-top: ${size16x9}%;
    background-size: contain;
  }
`;