/** Switch Component
 *
 * This component presents a switch button for easy toggling between options
 *
 * @version 1.0.0
 * @created - 2019.12.22
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
 */

//#region imports
import switchButtonStyle from './switchButtonStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles, Tooltip, Switch } from '@material-ui/core';

//#endregion

const SwitchButton = ({
  classes: { root, switchBase, track, thumb, checked }, action, label, isChecked, id
}) => (
  <Tooltip title={ label } placement='right'>
    <Switch checked={ isChecked } onChange={ action } id={ id } classes={{ root, switchBase, track, thumb, checked }} />
  </Tooltip>
);

const mapStateToProps = state => ({ body: state.body });

SwitchButton.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }),
  action: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
};

SwitchButton.defaultProps = {
  label: '',
  id: '',
};

export default compose(
  withStyles(switchButtonStyle),
  connect(mapStateToProps, null),
)(SwitchButton);
