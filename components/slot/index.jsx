//#region imports
import slotStyle from './slotStyle';
import { getInputStyle } from '../../style/dynamicStyle';

import { useState } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider, TextField, InputAdornment, Paper } from '@material-ui/core';

import Reel from '../reel';
import Button from '../button';

import { togglePopup } from '../popup/popupActions';
import { initializeOptions } from '../../utils/helpers';
import { MIN_BALANCE, MAX_BALANCE, SPIN_COST } from '../../utils/constants';
//#endregion

const Slot = ({
  body: { currentTheme }, togglePopup,
  classes: {
    slot, controls, board, divider, topDivider, middleDivider, bottomDivider, textFieldSmall, underline, darkLabel,
    adornment, paperDark, paperLight
  }
}) => {
  const [balance, setBalance] = useState({ value: 200, isValid: true, showErrors: true });
  const [isSpinning, setIsSpinning] = useState(true);

  const balanceChanged = e => {
    if (isSpinning) return togglePopup({ open: true, variant: 'warning', message: 'Please wait...' });

    let options = initializeOptions(e.target.value);
    if (!Number(options.value) || Number(options.value) <= MIN_BALANCE || Number(options.value) > MAX_BALANCE) options.isValid = false;
    setBalance(options);
  };

  const spinReels = () => {
    if (isSpinning) return togglePopup({ open: true, variant: 'warning', message: 'Please wait...' });
    if (balance.value <= MIN_BALANCE) return togglePopup({ open: true, variant: 'error', message: 'Please refill balance to continue!' });

    setIsSpinning(true);
    console.log('Spinning...');
    setBalance(initializeOptions(balance.value - SPIN_COST));
    setIsSpinning(false);
  };

  return (
    <Paper className={ classnames(slot, currentTheme === 'dark' ? paperDark : paperLight) }>
      <div className={ controls }>
        <TextField id='balance' type='number' label='Balance' className={ textFieldSmall } required
          value={ balance.value } onChange={ balanceChanged } error={ balance.showErrors && !balance.isValid }
          InputLabelProps={{ classes: { root: currentTheme === 'dark' ? darkLabel : '' }}}
          inputProps={{ style: getInputStyle(currentTheme), min: MIN_BALANCE, max: MAX_BALANCE }}
          InputProps={{ classes: { underline }, startAdornment: <InputAdornment position='start' classes={{ root: adornment }} disableTypography>€</InputAdornment> }}
        />
      </div>
      <div className={ board }>
        <Reel />
        <Reel />
        <Reel />
        <Divider className={ classnames(divider, topDivider) } />
        <Divider className={ classnames(divider, middleDivider) } />
        <Divider className={ classnames(divider, bottomDivider) } />
      </div>
      <Button round={ true } type={ balance.value <= MIN_BALANCE ? 'secondary' : 'primary' } onClick={ spinReels }>Spin</Button>
    </Paper>
  );
};

Slot.propTypes = {
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
  withStyles(slotStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(Slot);
