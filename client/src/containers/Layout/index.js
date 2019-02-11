import React, { Component, Fragment, Children } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Typography,
  MenuList, MenuItem
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { compose } from 'redux';
import ErrorBoundary from 'components/ErrorBoundary';
import { Container, Drawer, Main } from './styled';

const getItemByPathname = (pathname) => {
  if(pathname === '/about') {
    return "About";
  }
  
  if(/^\/phones\/\d+\/?$/.test(pathname)) {
    return "Details";
  }

  return "Catalog";
}

class Layout extends Component {
  state = {
    open: false
  }

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { location: { pathname }, children } = this.props
    const { open } = this.state

    const drawer = (
      <MenuList>
        <MenuItem
          to="/"
          component={Link}
          selected={pathname === '/'}
          onClick={this.handleDrawerToggle}
        >
          Catalog
        </MenuItem>
        <MenuItem
          to="/about"
          component={Link}
          selected={'/about' === pathname}
          onClick={this.handleDrawerToggle}
        >
          About
        </MenuItem>
      </MenuList>
    )

    return <Fragment>
      <Container>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap >
              {getItemByPathname(pathname)}
            </Typography>
          </Toolbar>
        </AppBar>
          <Drawer
            variant="temporary"
            open={open}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: 'paper'
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        <Main>
          <div className="toolbar" />
          <ErrorBoundary>
            {Children.toArray(children)}
          </ErrorBoundary>
        </Main>
      </Container>
    </Fragment>
  }
}

export default compose(
  withRouter,
)(Layout)