/** SLOT
  *
  * This is the brain of the slot machine
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

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
import { setIsSpinning } from './slotActions';
import { initializeOptions, getRandomInt } from '../../utils/helpers';
import { MIN_BALANCE, MAX_BALANCE, SPIN_COST, REEL_SYMBOLS, REEL_POSITIONS, SYMBOL_HEIGHT } from '../../utils/constants';
//#endregion

const Slot = ({
  body: { currentTheme }, slot: { isSpinning }, reel: { controlIsActive, reel: { reelOne, reelTwo, reelThree }}, togglePopup, setIsSpinning,
  classes: {
    slot, controls, board, divider, topDivider, middleDivider, bottomDivider, textFieldSmall, underline, darkLabel,
    adornment, paperDark, paperLight, activeReelLine
  }
}) => {
  const getScrollBy = reel => {
    let symbolIndex, positionIndex;

    if (controlIsActive) {
      symbolIndex = REEL_SYMBOLS.findIndex(item => item === reel.symbol);
      positionIndex = REEL_POSITIONS.findIndex(item => item === reel.position);
    }
    else {
      symbolIndex = getRandomInt(REEL_SYMBOLS.length - 1);
      positionIndex = getRandomInt(REEL_POSITIONS.length - 1);
    }

    // Scroll by how much?
    let amplitude = Math.abs((symbolIndex * SYMBOL_HEIGHT) + SYMBOL_HEIGHT); // adding SYMBOL_HEIGHT to compensate for the top offset symbol
    if (positionIndex === 1) amplitude -= SYMBOL_HEIGHT / 2;
    if (positionIndex === 2) amplitude -= SYMBOL_HEIGHT;

    // Scroll in which direction (up or down)?
    const direction = -1;

    return amplitude * direction; // vector
  };

  const [balance, setBalance] = useState({ value: 200, isValid: true, showErrors: true });
  const [scrollReelOneBy, setScrollReelOneBy] = useState(getScrollBy(reelOne));
  const [scrollReelTwoBy, setScrollReelTwoBy] = useState(getScrollBy(reelTwo));
  const [scrollReelThreeBy, setScrollReelThreeBy] = useState(getScrollBy(reelThree));
  const [winPosition, setWinPosition] = useState('center');
  const spinStopDelays = [0, 500, 1000];

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
    setBalance(initializeOptions(balance.value - SPIN_COST));
    setScrollReelOneBy(getScrollBy(reelOne));
    setScrollReelTwoBy(getScrollBy(reelTwo));
    setScrollReelThreeBy(getScrollBy(reelThree));
    computeWins();
    setIsSpinning(false);
  };

  const computeWins = () => {
    setWinPosition('top');
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
        <Reel scrollBy={ scrollReelOneBy } spinStopDelay={ spinStopDelays[0] } />
        <Reel scrollBy={ scrollReelTwoBy } spinStopDelay={ spinStopDelays[1] } />
        <Reel scrollBy={ scrollReelThreeBy } spinStopDelay={ spinStopDelays[2] } />
        <Divider className={ classnames(divider, topDivider, winPosition === 'top' && activeReelLine) } />
        <Divider className={ classnames(divider, middleDivider, winPosition === 'center' && activeReelLine) } />
        <Divider className={ classnames(divider, bottomDivider, winPosition === 'bottom' && activeReelLine) } />
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
  slot: PropTypes.shape({
    isSpinning: PropTypes.bool.isRequired,
  }),
  reel: PropTypes.shape({
    reel: PropTypes.shape({
      reelOne: PropTypes.string.isRequired,
      reelTwo: PropTypes.string.isRequired,
      reelThree: PropTypes.string.isRequired,
    }),
    controlIsActive: PropTypes.bool.isRequired,
  }),
  togglePopup: PropTypes.func.isRequired,
  setIsSpinning: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  body: state.body,
  slot: state.slot,
  reel: state.reel,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: options => dispatch(togglePopup(options)),
  setIsSpinning: value => dispatch(setIsSpinning(value)),
});

export default compose(
  withStyles(slotStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(Slot);
