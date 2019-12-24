/** REEL
  *
  * This component presents the reels of the slot machine
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import reelStyle from './reelStyle';
import { getBackground } from '../../style/dynamicStyle';

import { useRef } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { SYMBOL_HEIGHT, REEL_SYMBOLS, SPIN_DURATION } from '../../utils/constants';
//#endregion

const Reel = ({ scrollBy, spinStopDelay, body: { currentTheme }, slot: { isSpinning }, classes: { reel, scrollHide, cannotScroll, symbol }}) => {
  // Add top offset - this prevents a blank space from showing at the reel top when the first symbol is displayed in the middle or bottom positions
  // Add bottom offset - this prevents a blank space from showing at the reel bottom when the last symbol is displayed in the middle or top positions
  const REEL_SYMBOLS_WITH_OFFSET = [REEL_SYMBOLS[REEL_SYMBOLS.length - 1], ...REEL_SYMBOLS, REEL_SYMBOLS[0]];
  const NUMBER_OF_ROWS = REEL_SYMBOLS_WITH_OFFSET.length;
  const ITERATIONS = 15;

  const generateRefs = numberOfRefs => {
    let refs = [];
    for (let i = 0; i < numberOfRefs; i++) refs.push(useRef());
    return refs;
  };

  const reelRefs = generateRefs(NUMBER_OF_ROWS);

  // Ideally, this block should be inside a useEffect hook that listens for updates on the scrollBy prop
  // However, if we do that, the reels will not spin when the new scrollBy prop value is same as the previous value
  // We don't want that, as it might look buggy to a user
  // N.B: this means we have a re-render on every click of the spin button, but that's okay.
  reelRefs.forEach(reelRef => {
    isSpinning && reelRef.current && reelRef.current.animate(
      { top: [0, `-${ (NUMBER_OF_ROWS * SYMBOL_HEIGHT) - SYMBOL_HEIGHT }px`, `${ scrollBy }px`] }, // subtract SYMBOL_HEIGHT to compensate for offset
      {
        duration: (SPIN_DURATION + spinStopDelay) / ITERATIONS,
        iterations: ITERATIONS,
        easing: 'linear',
        fill: 'forwards',
      }
    );
  });

  return (
    <div className={ scrollHide }>
      <div className={ classnames(reel, cannotScroll) } style={ getBackground(currentTheme) }>
        {
          REEL_SYMBOLS_WITH_OFFSET.map(
            (reelSymbol, index) => <img key={ index } className={ symbol } ref={ reelRefs[index] } src={`/${ reelSymbol }.png`} alt='symbol image' />
          )
        }
      </div>
    </div>
  );
};

Reel.propTypes = {
  classes: PropTypes.object.isRequired,
  scrollBy: PropTypes.number,
  spinStopDelay: PropTypes.number,
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }),
  slot: PropTypes.shape({
    isSpinning: PropTypes.bool.isRequired,
  }),
};

Reel.defaultProps = {
  scrollBy: 0,
  spinStopDelay: 0,
};

const mapStateToProps = state => ({
  body: state.body,
  slot: state.slot,
});

export default compose(
  withStyles(reelStyle),
  connect(mapStateToProps, null)
)(Reel);
