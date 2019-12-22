//#region imports
import headerStyle from './headerStyle';

import Link from 'next/link';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles, Avatar, IconButton, Tooltip } from '@material-ui/core';

import HideOnScroll from './hideOnScroll';

import { toggleTheme } from '../body/bodyActions';
import { LOGO } from '../../utils/constants';
const pageURL = require('../../utils/pageURL');
//#endregion

const Header = (props) => {
  const {
    body: { currentTheme }, toggleTheme, classes: { appBar, barRight, appName, themeButton, iconStyle, moon, sun, logo },
  } = props;

  const themeChanged = () => {
    localStorage.setItem(process.env.USER_THEME_KEY, currentTheme === 'light' ? 'dark' : 'light');
    toggleTheme();
  };

  return (
    <HideOnScroll { ...props }>
      <AppBar className={ appBar } >
        <Toolbar>
          <Link href={ pageURL.home.url } as={ pageURL.home.as } passHref>
            <Avatar alt='logo' src={ LOGO } className={ logo } />
          </Link>
          <div className={ barRight }>
            <Link href={ pageURL.home.url } as={ pageURL.home.as } passHref>
              <Typography variant='h6' color='inherit' className={ appName } noWrap>{ process.env.APP_NAME }</Typography>
            </Link>
            <Tooltip title={`Switch to ${ currentTheme === 'light' ? 'dark' : 'light' } theme`} placement='right'>
              <IconButton className={ themeButton } onClick={ themeChanged }>
                {
                  currentTheme === 'light' ?
                    <i className={ classnames('fas fa-moon', iconStyle, moon) }></i>
                    :
                    <i className={ classnames('far fa-sun', iconStyle, sun) }></i>
                }
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

const mapStateToProps = state => ({
  body: state.body,
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme()),
});

Header.propTypes = {
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }),
  classes: PropTypes.object.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default compose(
  withStyles(headerStyle),
  connect(mapStateToProps, mapDispatchToProps),
)(Header);
