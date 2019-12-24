/** DIVIDERS
  *
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import slotStyle from './slotStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
//#endregion

const Dividers = ({
  slot: { isSpinning, winPositions }, classes: { divider, topDivider, middleDivider, bottomDivider, activeReelLine }
}) => (
  <>
    <Divider className={ classnames(divider, topDivider, !isSpinning && winPositions.includes('top') && activeReelLine) } />
    <Divider className={ classnames(divider, middleDivider, !isSpinning && winPositions.includes('center') && activeReelLine) } />
    <Divider className={ classnames(divider, bottomDivider, !isSpinning && winPositions.includes('bottom') && activeReelLine) } />
  </>
);

Dividers.propTypes = {
  classes: PropTypes.object.isRequired,
  slot: PropTypes.shape({
    isSpinning: PropTypes.bool.isRequired,
    winPositions: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = state => ({
  slot: state.slot,
});

export default compose(
  withStyles(slotStyle),
  connect(mapStateToProps, null)
)(Dividers);
