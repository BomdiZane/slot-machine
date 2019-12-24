/** REEL CONTROLS
  *
  * This component presents reel controls to the client.
  * This provides clients the ability to manually set the reel scroll positions.
  * This is useful for debugging.
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import reelStyle from './reelStyle';
import { getTypographyStyle } from '../../style/dynamicStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Paper, Typography, TextField, MenuItem } from '@material-ui/core';

import SwitchButton from '../switchButton';
import { togglePopup } from '../popup/popupActions';
import { updateReel, setControlIsActive } from './reelActions';
import { REEL_SYMBOLS, REEL_POSITIONS } from '../../utils/constants';
//#endregion

const Reel = ({
  updateReel, reel: { controlIsActive, reel: { reelOne, reelTwo, reelThree }}, slot: { isSpinning },
  togglePopup, body: { currentTheme }, setControlIsActive,
  classes: {
    controls, paperDark, paperLight, header, group, textFieldFull, inputStyle, darkLabel, underline, input, menu, menuIcon, reelName
  }
}) => {
  const controlStateChanged = () => {
    return isSpinning ? togglePopup({ open: true, variant: 'error', message: 'Please wait...' }) : setControlIsActive(!controlIsActive);
  };

  return (
    <Paper className={ classnames(controls, currentTheme === 'dark' ? paperDark : paperLight) }>
      <div className={ header }>
        <Typography style={ getTypographyStyle(currentTheme) } variant='h6'>Reel Controls</Typography>
        <SwitchButton action={ controlStateChanged } isChecked={ controlIsActive } />
      </div>

      <div className={ group }>
        <Typography className={ reelName } style={ getTypographyStyle(currentTheme) } variant='body1'>Reel 1</Typography>
        <TextField id='symbol' label='Symbol' className={ textFieldFull } select disabled={ !controlIsActive || isSpinning }
          value={ reelOne.symbol } onChange={ (e) => updateReel('reelOne', 'symbol', e.target.value) }
          inputProps={{ style: inputStyle }} InputLabelProps={{ classes: { root: currentTheme === 'dark' ? darkLabel : '' }}}
          InputProps={{ classes: { underline }}}
          SelectProps={{
            MenuProps: { className: menu, classes: { paper: currentTheme === 'dark' ? paperDark : paperLight }},
            inputProps: { classes: { root: input }}, classes: { icon: menuIcon }
          }}
        >
          { REEL_SYMBOLS.map(symbol => <MenuItem key={ symbol } value={ symbol }>{ symbol }</MenuItem>) }
        </TextField>
        <TextField id='position' label='Position' className={ textFieldFull } select disabled={ !controlIsActive || isSpinning }
          value={ reelOne.position } onChange={ (e) => updateReel('reelOne', 'position', e.target.value) }
          inputProps={{ style: inputStyle }} InputLabelProps={{ classes: { root: currentTheme === 'dark' ? darkLabel : '' }}}
          InputProps={{ classes: { underline }}}
          SelectProps={{
            MenuProps: { className: menu, classes: { paper: currentTheme === 'dark' ? paperDark : paperLight }},
            inputProps: { classes: { root: input }}, classes: { icon: menuIcon }
          }}
        >
          { REEL_POSITIONS.map(position => <MenuItem key={ position } value={ position }>{ position }</MenuItem>) }
        </TextField>
      </div>

      <div className={ group }>
        <Typography className={ reelName } style={ getTypographyStyle(currentTheme) } variant='body1'>Reel 2</Typography>
        <TextField id='symbol' label='Symbol' className={ textFieldFull } select disabled={ !controlIsActive || isSpinning }
          value={ reelTwo.symbol } onChange={ (e) => updateReel('reelTwo', 'symbol', e.target.value) }
          inputProps={{ style: inputStyle }} InputLabelProps={{ classes: { root: currentTheme === 'dark' ? darkLabel : '' }}}
          InputProps={{ classes: { underline }}}
          SelectProps={{
            MenuProps: { className: menu, classes: { paper: currentTheme === 'dark' ? paperDark : paperLight }},
            inputProps: { classes: { root: input }}, classes: { icon: menuIcon }
          }}
        >
          { REEL_SYMBOLS.map(symbol => <MenuItem key={ symbol } value={ symbol }>{ symbol }</MenuItem>) }
        </TextField>
        <TextField id='position' label='Position' className={ textFieldFull } select disabled={ !controlIsActive || isSpinning }
          value={ reelTwo.position } onChange={ (e) => updateReel('reelTwo', 'position', e.target.value) }
          inputProps={{ style: inputStyle }} InputLabelProps={{ classes: { root: currentTheme === 'dark' ? darkLabel : '' }}}
          InputProps={{ classes: { underline }}}
          SelectProps={{
            MenuProps: { className: menu, classes: { paper: currentTheme === 'dark' ? paperDark : paperLight }},
            inputProps: { classes: { root: input }}, classes: { icon: menuIcon }
          }}
        >
          { REEL_POSITIONS.map(position => <MenuItem key={ position } value={ position }>{ position }</MenuItem>) }
        </TextField>
      </div>

      <div className={ group }>
        <Typography className={ reelName } style={ getTypographyStyle(currentTheme) } variant='body1'>Reel 3</Typography>
        <TextField id='symbol' label='Symbol' className={ textFieldFull } select disabled={ !controlIsActive || isSpinning }
          value={ reelThree.symbol } onChange={ (e) => updateReel('reelThree', 'symbol', e.target.value) }
          inputProps={{ style: inputStyle }} InputLabelProps={{ classes: { root: currentTheme === 'dark' ? darkLabel : '' }}}
          InputProps={{ classes: { underline }}}
          SelectProps={{
            MenuProps: { className: menu, classes: { paper: currentTheme === 'dark' ? paperDark : paperLight }},
            inputProps: { classes: { root: input }}, classes: { icon: menuIcon }
          }}
        >
          { REEL_SYMBOLS.map(symbol => <MenuItem key={ symbol } value={ symbol }>{ symbol }</MenuItem>) }
        </TextField>
        <TextField id='position' label='Position' className={ textFieldFull } select disabled={ !controlIsActive || isSpinning }
          value={ reelThree.position } onChange={ (e) => updateReel('reelThree', 'position', e.target.value) }
          inputProps={{ style: inputStyle }} InputLabelProps={{ classes: { root: currentTheme === 'dark' ? darkLabel : '' }}}
          InputProps={{ classes: { underline }}}
          SelectProps={{
            MenuProps: { className: menu, classes: { paper: currentTheme === 'dark' ? paperDark : paperLight }},
            inputProps: { classes: { root: input }}, classes: { icon: menuIcon }
          }}
        >
          { REEL_POSITIONS.map(position => <MenuItem key={ position } value={ position }>{ position }</MenuItem>) }
        </TextField>
      </div>
    </Paper>
  );
};

Reel.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }),
  reel: PropTypes.shape({
    reel: PropTypes.shape({
      reelOne: PropTypes.object.isRequired,
      reelTwo: PropTypes.object.isRequired,
      reelThree: PropTypes.object.isRequired,
    }),
    controlIsActive: PropTypes.bool.isRequired,
  }),
  slot: PropTypes.shape({
    isSpinning: PropTypes.bool.isRequired,
  }),
  setControlIsActive: PropTypes.func.isRequired,
  updateReel: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  body: state.body,
  reel: state.reel,
  slot: state.slot,
});

const mapDispatchToProps = dispatch => ({
  updateReel: (reel, key, value) => dispatch(updateReel(reel, key, value)),
  setControlIsActive: value => dispatch(setControlIsActive(value)),
  togglePopup: options => dispatch(togglePopup(options)),
});

export default compose(
  withStyles(reelStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(Reel);
