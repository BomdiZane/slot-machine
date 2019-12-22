//#region imports
import homeStyles from './homeStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';

import Section from '../section/section';
import Reel from './reel';

import { togglePopup } from '../popup/popupActions';
//#endregion

const Main = ({ togglePopup, classes: { section, slot, divider, topDivider, middleDivider, bottomDivider }}) => {
  return (
    <Section className={ section }>
      <div className={ slot }>
        <Reel />
        <Reel />
        <Reel />
        <Divider className={ classnames(divider, topDivider) } />
        <Divider className={ classnames(divider, middleDivider) } />
        <Divider className={ classnames(divider, bottomDivider) } />
      </div>
    </Section>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }),
  togglePopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  body: state.body,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: options => dispatch(togglePopup(options)),
});

export default compose(
  withStyles(homeStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(Main);
