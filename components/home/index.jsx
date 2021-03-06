/** MAIN
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import homeStyles from './homeStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Section from '../section/section';
import Slot from '../slot';
import PayTable from '../payTable';
import ReelController from '../reel/controller';
//#endregion

const Main = ({ classes: { section, group }}) =>  (
  <Section className={ section }>
    <Slot />
    <div className={ group }>
      <PayTable />
      <ReelController />
    </div>
  </Section>
);

Main.propTypes = {
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
)(Main);
