import styled from 'styled-components';
import {Drawer as DrawerMUI} from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles'

export const Container = styled.div`
  flex-grow: 1;
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const Drawer = styled(DrawerMUI)`
  && {
    .paper {
      width: 240px;
    }
  }
`;

export const Main = withTheme()(styled.main`
  flex-grow: 1;
  background-color: #fff;
  padding: ${({theme}) => theme.spacing.unit * 3}px;

  .toolbar {
    ${({theme}) => theme.mixins.toolbar}
  }
`);