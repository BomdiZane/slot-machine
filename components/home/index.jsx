//#region imports
import homeStyles from './homeStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Section from '../section/section';
import Slot from '../slot';
import PayTable from '../payTable';

import { togglePopup } from '../popup/popupActions';
//#endregion

const Main = ({ togglePopup, classes: { section }}) => {
  return (
    <Section className={ section }>
      <Slot />
      <PayTable />
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
