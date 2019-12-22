//#region imports
import homeStyles from './homeStyle';
import { getBackground } from '../../style/dynamicStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
//#endregion

const Reel = ({ body: { currentTheme }, classes: { reel }}) => {
  return (
    <div className={ reel } style={ getBackground(currentTheme) }>
      <img src='/BAR.png' alt='BAR image'/>
      <img src='/2xBAR.png' alt='2xBAR image'/>
      <img src='/3xBAR.png' alt='3xBAR image'/>
      <img src='/7.png' alt='7 image'/>
      <img src='/Cherry.png' alt='Cherry image'/>
    </div>
  );
};

Reel.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  body: state.body,
});

export default compose(
  withStyles(homeStyles),
  connect(mapStateToProps, null)
)(Reel);
