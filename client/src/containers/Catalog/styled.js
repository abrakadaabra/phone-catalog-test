import styled from 'styled-components';
import { GridList as GridListMUI, IconButton } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const GridList = styled(GridListMUI)`
  max-width: 768px;

  .phone-image {
    width: 100%;
  }
`;

export const InfoDetailsButton = styled(IconButton)`
  && {
    color: rgba(255, 255, 255, 0.54);
  }
`;