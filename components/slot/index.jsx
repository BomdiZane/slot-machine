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

import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Divider, TextField, InputAdornment, Paper } from '@material-ui/core';

import Reel from '../reel';
import Button from '../button';

import { togglePopup } from '../popup/popupActions';
import { updateReel } from '../reel/reelActions';
import { setWinRows } from '../payTable/payTableActions';
import { setIsSpinning } from './slotActions';
import { initializeOptions, getRandomInt } from '../../utils/helpers';
import { MIN_BALANCE, MAX_BALANCE, SPIN_COST, REEL_SYMBOLS, REEL_POSITIONS, SYMBOL_HEIGHT, SPIN_DURATION } from '../../utils/constants';
//#endregion

const Slot = ({
  body: { currentTheme }, slot: { isSpinning }, reel: { controlIsActive, reel: { reelOne, reelTwo, reelThree }},
  togglePopup, setIsSpinning, updateReel, setWinRows,
  classes: {
    slot, controls, board, divider, topDivider, middleDivider, bottomDivider, textFieldSmall, underline, darkLabel,
    adornment, paperDark, paperLight, activeReelLine
  }
}) => {
  const [balance, setBalance] = useState({ value: 200, isValid: true, showErrors: true });
  const [scrollReelOneBy, setScrollReelOneBy] = useState(0);
  const [scrollReelTwoBy, setScrollReelTwoBy] = useState(0);
  const [scrollReelThreeBy, setScrollReelThreeBy] = useState(0);
  const [winPositions, setWinPositions] = useState([]);
  const spinStopDelays = [0, 500, 1000];
  const boardRef = useRef();

  const balanceChanged = e => {
    if (isSpinning) return togglePopup({ open: true, variant: 'error', message: 'Please wait...' });

    let options = initializeOptions(e.target.value);
    if (!Number(options.value) || Number(options.value) <= MIN_BALANCE || Number(options.value) > MAX_BALANCE) options.isValid = false;
    setBalance(options);
  };

  const getScrollBy = (reel, reelID) => {
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

    // Update reel states. Will be used later for computing and displaying results
    updateReel(reelID, 'symbol', REEL_SYMBOLS[symbolIndex]);
    updateReel(reelID, 'position', REEL_POSITIONS[positionIndex]);

    return amplitude * direction; // vector
  };

  const spinReels = () => {
    if (isSpinning) return togglePopup({ open: true, variant: 'error', message: 'Please wait...' });
    if (balance.value <= MIN_BALANCE) return togglePopup({ open: true, variant: 'error', message: 'Please refill balance to continue!' });

    setIsSpinning(true);
    setBalance(initializeOptions(balance.value - SPIN_COST));
    setScrollReelOneBy(getScrollBy(reelOne, 'reelOne'));
    setScrollReelTwoBy(getScrollBy(reelTwo, 'reelTwo'));
    setScrollReelThreeBy(getScrollBy(reelThree, 'reelThree'));

    // Wait for all animations to finish and then update UI with results
    // Promise.all(boardRef.current.getAnimations({ subtree: true }).map(animation => animation.finished)).then(() => showResults()); // Experimental!!!
    setTimeout(showResults, SPIN_DURATION + Math.max(...spinStopDelays));
  };

  const showResults = () => {
    console.log('All animations done...');
    console.log('reelOne: '+JSON.stringify(reelOne));
    console.log('reelTwo: '+JSON.stringify(reelTwo));
    console.log('reelThree: '+JSON.stringify(reelThree));
    let newWinPositions = [];
    let newWinRows = [];
    let reward = 0;


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
      <div className={ board } ref={ boardRef }>
        <Reel scrollBy={ scrollReelOneBy } spinStopDelay={ spinStopDelays[0] } />
        <Reel scrollBy={ scrollReelTwoBy } spinStopDelay={ spinStopDelays[1] } />
        <Reel scrollBy={ scrollReelThreeBy } spinStopDelay={ spinStopDelays[2] } />
        <Divider className={ classnames(divider, topDivider, winPositions.includes('top') && activeReelLine) } />
        <Divider className={ classnames(divider, middleDivider, winPositions.includes('center') && activeReelLine) } />
        <Divider className={ classnames(divider, bottomDivider, winPositions.includes('bottom') && activeReelLine) } />
      </div>
      <Button round={ true } type={ isSpinning || balance.value <= MIN_BALANCE ? 'secondary' : 'primary' } onClick={ spinReels }>Spin</Button>
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
  setWinRows: PropTypes.func.isRequired,
  updateReel: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  body: state.body,
  slot: state.slot,
  reel: state.reel,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: options => dispatch(togglePopup(options)),
  setIsSpinning: value => dispatch(setIsSpinning(value)),
  setWinRows: rowIDs => dispatch(setWinRows(rowIDs)),
  updateReel: (reel, key, value) => dispatch(updateReel(reel, key, value)),
});

export default compose(
  withStyles(slotStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(Slot);
