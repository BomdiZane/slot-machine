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
import { withStyles, TextField, InputAdornment, Paper } from '@material-ui/core';

import Reel from '../reel';
import Dividers from './dividers';
import Button from '../button';

import { togglePopup } from '../popup/popupActions';
import { setWinRows } from '../payTable/payTableActions';
import { setIsSpinning, setWinPositions } from './slotActions';
import { initializeOptions, getRandomInt } from '../../utils/helpers';
import {
  MIN_BALANCE, MAX_BALANCE, SPIN_COST, REEL_SYMBOLS, REEL_BAR_SYMBOLS, REEL_POSITIONS, SYMBOL_HEIGHT, SPIN_DURATION
} from '../../utils/constants';
//#endregion

const Slot = ({
  body: { currentTheme }, slot: { isSpinning }, setWinPositions,
  reel: { controlIsActive, reel: { reelOne, reelTwo, reelThree }}, togglePopup, setIsSpinning, setWinRows,
  classes: { slot, controls, board, textFieldSmall, underline, darkLabel, adornment, paperDark, paperLight }
}) => {
  const [balance, setBalance] = useState({ value: 200, isValid: true, showErrors: true });
  const [scrollReelOneBy, setScrollReelOneBy] = useState(0);
  const [scrollReelTwoBy, setScrollReelTwoBy] = useState(0);
  const [scrollReelThreeBy, setScrollReelThreeBy] = useState(0);
  const spinStopDelays = [0, 500, 1000];
  const boardRef = useRef();

  const balanceChanged = e => {
    if (isSpinning) return togglePopup({ open: true, variant: 'error', message: 'Please wait...' });

    let options = initializeOptions(e.target.value);
    if (!Number(options.value) || Number(options.value) <= MIN_BALANCE || Number(options.value) > MAX_BALANCE) options.isValid = false;
    setBalance(options);
  };

  const getScrollSymbolIndex = reel => controlIsActive ? REEL_SYMBOLS.findIndex(item => item === reel.symbol) : getRandomInt(REEL_SYMBOLS.length - 1);
  const getScrollPositionIndex = reel => controlIsActive ? REEL_POSITIONS.findIndex(item => item === reel.position) : getRandomInt(REEL_POSITIONS.length - 1);

  const getScrollBy = (symbolIndex, positionIndex) => {
    // Scroll by how much?
    let amplitude = Math.abs((symbolIndex * SYMBOL_HEIGHT) + SYMBOL_HEIGHT); // adding SYMBOL_HEIGHT to compensate for the top offset symbol
    if (positionIndex === 1) amplitude -= SYMBOL_HEIGHT / 2;
    if (positionIndex === 2) amplitude -= SYMBOL_HEIGHT;

    // Scroll in which direction (up or down)?
    const direction = -1;

    return amplitude * direction; // vector
  };

  const spinReels = () => {
    if (isSpinning) return togglePopup({ open: true, variant: 'error', message: 'Please wait...' });
    if (balance.value <= MIN_BALANCE) return togglePopup({ open: true, variant: 'error', message: 'Please refill balance to continue!' });

    setIsSpinning(true);

    let reelOneSymbolIndex = getScrollSymbolIndex(reelOne);
    let reelOnePositionIndex = getScrollPositionIndex(reelOne);
    let reelTwoSymbolIndex = getScrollSymbolIndex(reelTwo);
    let reelTwoPositionIndex = getScrollPositionIndex(reelTwo);
    let reelThreeSymbolIndex = getScrollSymbolIndex(reelThree);
    let reelThreePositionIndex = getScrollPositionIndex(reelThree);

    setScrollReelOneBy(getScrollBy(reelOneSymbolIndex, reelOnePositionIndex));
    setScrollReelTwoBy(getScrollBy(reelTwoSymbolIndex, reelTwoPositionIndex));
    setScrollReelThreeBy(getScrollBy(reelThreeSymbolIndex, reelThreePositionIndex));

    const [newReward, newWinRows, newWinPositions] = computeResults({
      reelOneResults: { symbol: REEL_SYMBOLS[reelOneSymbolIndex], position: REEL_POSITIONS[reelOnePositionIndex] },
      reelTwoResults: { symbol: REEL_SYMBOLS[reelTwoSymbolIndex], position: REEL_POSITIONS[reelTwoPositionIndex] },
      reelThreeResults: { symbol: REEL_SYMBOLS[reelThreeSymbolIndex], position: REEL_POSITIONS[reelThreePositionIndex] }
    });

    // Wait for all animations to finish and then update UI with results
    // Promise.all(boardRef.current.getAnimations({ subtree: true }).map(animation => animation.finished))
    //   .then(() => updateUI(newReward, newWinRows, newWinPositions)); // Experimental!!!
    setTimeout(() => {
      updateUI(newReward, newWinRows, newWinPositions);
    }, SPIN_DURATION + Math.max(...spinStopDelays) + 500);
  };

  const updateUI = (newReward, newWinRows, newWinPositions) => {
    setIsSpinning(false);
    setBalance(initializeOptions(balance.value + newReward - SPIN_COST));
    setWinPositions(newWinPositions);
    setWinRows(newWinRows);
  };

  const computeResults = results => {
    const { reelOneResults, reelTwoResults, reelThreeResults } = results;
    let newWinPositions = [];
    let newWinRows = [];
    let newReward = 0;
    const reelOnePosition = reelOneResults.position.toLowerCase();
    const reelTwoPosition = reelTwoResults.position.toLowerCase();
    const reelThreePosition = reelThreeResults.position.toLowerCase();
    const reelOneSymbol = reelOneResults.symbol;
    const reelTwoSymbol = reelTwoResults.symbol;
    const reelThreeSymbol = reelThreeResults.symbol;

    console.log('VALUES: ');
    console.log('reelOneResults symbol: ' + reelOneSymbol + ', reelOneResults position: ' + reelOnePosition);
    console.log('reelTwoResults symbol: ' + reelTwoSymbol + ', reelTwoResults position: ' + reelTwoPosition);
    console.log('reelThreeResults symbol: ' + reelThreeSymbol + ', reelThreeResults position: ' + reelThreePosition);

    const updateVariables = (reward, winRow, winPosition) => {
      newReward += reward;
      newWinRows.push(winRow);
      newWinPositions.push(winPosition);
    };

    const checkSpecialCombos = (symbol1, symbol2, position) => {
      // Any combination of BAR symbols?
      if (REEL_BAR_SYMBOLS.includes(symbol1) && REEL_BAR_SYMBOLS.includes(symbol2)) updateVariables(5, 9, position);
      // Any combination of non-BAR symbols (CHERRY, 7)?
      else if (!REEL_BAR_SYMBOLS.includes(symbol1) && !REEL_BAR_SYMBOLS.includes(symbol2) && symbol1 !== symbol2) updateVariables(75, 5, position);
    };

    const getReelTopSymbol = reel => {
      if (reel.position.toLowerCase() === 'top') return reel.symbol;
      if (reel.position.toLowerCase() === 'bottom'){
        let reelSymbolIndex = REEL_SYMBOLS.findIndex(item => item === reel.symbol) - 1;
        if (reelSymbolIndex < 0) reelSymbolIndex = REEL_SYMBOLS.length - 1;
        return REEL_SYMBOLS[reelSymbolIndex];
      }
    };

    const getReelBottomSymbol = reel => {
      if (reel.position.toLowerCase() === 'bottom') return reel.symbol;
      if (reel.position.toLowerCase() === 'top') {
        let reelSymbolIndex = REEL_SYMBOLS.findIndex(item => item === reel.symbol) + 1;
        if (reelSymbolIndex >= REEL_SYMBOLS.length) reelSymbolIndex = 0;
        return REEL_SYMBOLS[reelSymbolIndex];
      }
    };

    const handleTripleMatch = (symbol, position) => {
      let cherryReward = 1000;
      let cherryPayTableRow = 3;

      if (position.toLowerCase() === 'top') {
        cherryReward = 2000;
        cherryPayTableRow = 2;
      }
      if (position.toLowerCase() === 'bottom') {
        cherryReward = 4000;
        cherryPayTableRow = 1;
      }

      switch (symbol) {
        case 'BAR': updateVariables(10, 8, position); break;
        case '2xBAR': updateVariables(20, 7, position); break;
        case '3xBAR': updateVariables(50, 6, position); break;
        case '7': updateVariables(150, 4, position); break;
        case 'CHERRY': updateVariables(cherryReward, cherryPayTableRow, position); break;

        default: break;
      }
    };

    if (reelOnePosition === 'center'){
      // A reel at the center can only match a sibling reel iff the sibling is also positioned at the center
      if (reelTwoPosition === 'center'){
        // If the symbols are the same, we check if there is a match with reelThree
        if (reelOneSymbol === reelTwoSymbol) {
          // If we have a match across all reels, the reward would depends on symbol
          if (reelThreePosition === 'center') handleTripleMatch(reelOneSymbol, 'center');
          // We know realOne and reelTwo match
          else if (REEL_BAR_SYMBOLS.includes(reelOneSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoSymbol)) updateVariables(5, 9, 'center');
        }
        // If the symbols are not the same, we check if there is a special 'mixed type' match
        else {
          checkSpecialCombos(reelOneSymbol, reelTwoSymbol, 'center');
          checkSpecialCombos(reelOneSymbol, reelThreeSymbol, 'center');
        }
      }
      else if (reelThreePosition === 'center') checkSpecialCombos(reelOneSymbol, reelThreeSymbol, 'center');
    }

    if (reelOnePosition === 'top'){
      let reelOneBottomSymbol = getReelBottomSymbol(reelOneResults);
      if (reelTwoPosition !== 'center'){
        let reelTwoTopSymbol = getReelTopSymbol(reelTwoResults);
        let reelTwoBottomSymbol = getReelBottomSymbol(reelTwoResults);

        if (reelOneSymbol === reelTwoTopSymbol) {
          if (reelThreePosition !== 'center'){
            let reelThreeTopSymbol = getReelTopSymbol(reelThreeResults);

            if (reelOneSymbol === reelThreeTopSymbol) handleTripleMatch(reelOneSymbol, 'top');
            else if (REEL_BAR_SYMBOLS.includes(reelOneSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoTopSymbol)) updateVariables(5, 9, 'top');
          }
          else if (REEL_BAR_SYMBOLS.includes(reelOneSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoTopSymbol)) updateVariables(5, 9, 'top');
        }
        else checkSpecialCombos(reelOneSymbol, reelTwoTopSymbol, 'top');

        if (reelOneBottomSymbol === reelTwoBottomSymbol) {
          if (reelThreePosition !== 'center'){
            let reelThreeBottomSymbol = getReelBottomSymbol(reelThreeResults);

            if (reelOneBottomSymbol === reelThreeBottomSymbol) handleTripleMatch(reelOneBottomSymbol, 'bottom');
            else if (REEL_BAR_SYMBOLS.includes(reelOneBottomSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoBottomSymbol)) updateVariables(5, 9, 'bottom');
          }
          else if (REEL_BAR_SYMBOLS.includes(reelOneBottomSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoBottomSymbol)) updateVariables(5, 9, 'bottom');
        }
        else checkSpecialCombos(reelOneBottomSymbol, reelTwoBottomSymbol, 'bottom');
      }
      else if (reelThreePosition !== 'center'){
        let reelThreeTopSymbol = getReelTopSymbol(reelThreeResults);
        let reelThreeBottomSymbol = getReelBottomSymbol(reelThreeResults);
        checkSpecialCombos(reelOneSymbol, reelThreeTopSymbol, 'top');
        checkSpecialCombos(reelOneBottomSymbol, reelThreeBottomSymbol, 'bottom');
      }
    }

    if (reelOnePosition === 'bottom'){
      let reelOneTopSymbol = getReelTopSymbol(reelOneResults);
      if (reelTwoPosition !== 'center'){
        let reelTwoBottomSymbol = getReelBottomSymbol(reelTwoResults);
        let reelTwoTopSymbol = getReelTopSymbol(reelTwoResults);

        if (reelOneSymbol === reelTwoBottomSymbol) {
          if (reelThreePosition !== 'center'){
            let reelThreeBottomSymbol = getReelBottomSymbol(reelThreeResults);

            if (reelOneSymbol === reelThreeBottomSymbol) handleTripleMatch(reelOneSymbol, 'bottom');
            else if (REEL_BAR_SYMBOLS.includes(reelOneSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoBottomSymbol)) updateVariables(5, 9, 'bottom');
          }
          else if (REEL_BAR_SYMBOLS.includes(reelOneSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoBottomSymbol)) updateVariables(5, 9, 'bottom');
        }
        else checkSpecialCombos(reelOneSymbol, reelTwoBottomSymbol, 'bottom');

        if (reelOneTopSymbol === reelTwoTopSymbol) {
          if (reelThreePosition !== 'center'){
            let reelThreeTopSymbol = getReelTopSymbol(reelThreeResults);

            if (reelOneTopSymbol === reelThreeTopSymbol) handleTripleMatch(reelOneTopSymbol, 'top');
            else if (REEL_BAR_SYMBOLS.includes(reelOneTopSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoTopSymbol)) updateVariables(5, 9, 'top');
          }
          else if (REEL_BAR_SYMBOLS.includes(reelOneTopSymbol) && REEL_BAR_SYMBOLS.includes(reelTwoTopSymbol)) updateVariables(5, 9, 'top');
        }
        else checkSpecialCombos(reelOneTopSymbol, reelTwoTopSymbol, 'top');
      }
      else if (reelThreePosition !== 'center'){
        let reelThreeTopSymbol = getReelTopSymbol(reelThreeResults);
        let reelThreeBottomSymbol = getReelBottomSymbol(reelThreeResults);
        checkSpecialCombos(reelOneTopSymbol, reelThreeTopSymbol, 'top');
        checkSpecialCombos(reelOneSymbol, reelThreeBottomSymbol, 'bottom');
      }
    }

    // At this point we have handled all possible matches that involve reelOne.
    // Now we look at possible matches between reelTwo and reelThree only
    if (reelTwoPosition === 'center' && reelThreePosition === 'center'  && reelOnePosition !== 'center'){
      // A reel at the center can only match a sibling reel iff the sibling is also positioned at the center
      checkSpecialCombos(reelTwoSymbol, reelThreeSymbol, 'center');
    }

    if (reelTwoPosition === 'top'){
      if (reelThreePosition !== 'center'){
        let reelThreeTopSymbol = getReelTopSymbol(reelThreeResults);
        let reelOneTopSymbol = getReelTopSymbol(reelOneResults);
        let reelThreeBottomSymbol = getReelBottomSymbol(reelThreeResults);
        let reelOneBottomSymbol = getReelBottomSymbol(reelOneResults);
        let reelTwoBottomSymbol = getReelBottomSymbol(reelTwoResults);

        // We already handled triple combos above. Here we only want special matches between reelTwo and reelThree
        if (reelTwoSymbol !== reelOneTopSymbol) checkSpecialCombos(reelTwoSymbol, reelThreeTopSymbol, 'top');
        if (reelTwoBottomSymbol !== reelOneBottomSymbol) checkSpecialCombos(reelTwoBottomSymbol, reelThreeBottomSymbol, 'bottom');
      }
    }

    if (reelTwoPosition === 'bottom'){
      if (reelThreePosition !== 'center'){
        let reelThreeBottomSymbol = getReelBottomSymbol(reelThreeResults);
        let reelOneBottomSymbol = getReelBottomSymbol(reelOneResults);
        let reelThreeTopSymbol = getReelTopSymbol(reelThreeResults);
        let reelOneTopSymbol = getReelTopSymbol(reelOneResults);
        let reelTwoTopSymbol = getReelTopSymbol(reelTwoResults);

        // We already handled triple combos above. Here we only want special matches between reelTwo and reelThree
        if (reelTwoSymbol !== reelOneBottomSymbol) checkSpecialCombos(reelTwoSymbol, reelThreeBottomSymbol, 'bottom');
        if (reelTwoTopSymbol !== reelOneTopSymbol) checkSpecialCombos(reelTwoTopSymbol, reelThreeTopSymbol, 'top');
      }
    }

    return [newReward, newWinRows, newWinPositions];
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
        <Dividers />
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
    results: PropTypes.shape({
      reelOneResults: PropTypes.object.isRequired,
      reelTwoResults: PropTypes.object.isRequired,
      reelThreeResults: PropTypes.object.isRequired,
    }),
  }),
  reel: PropTypes.shape({
    reel: PropTypes.shape({
      reelOne: PropTypes.object.isRequired,
      reelTwo: PropTypes.object.isRequired,
      reelThree: PropTypes.object.isRequired,
    }),
    controlIsActive: PropTypes.bool.isRequired,
  }),
  togglePopup: PropTypes.func.isRequired,
  setIsSpinning: PropTypes.func.isRequired,
  setWinPositions: PropTypes.func.isRequired,
  setWinRows: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  body: state.body,
  slot: state.slot,
  reel: state.reel,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: options => dispatch(togglePopup(options)),
  setIsSpinning: value => dispatch(setIsSpinning(value)),
  setWinPositions: positions => dispatch(setWinPositions(positions)),
  setWinRows: rowIDs => dispatch(setWinRows(rowIDs)),
});

export default compose(
  withStyles(slotStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(Slot);
