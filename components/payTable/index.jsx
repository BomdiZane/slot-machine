//#region imports
import payTableStyle from './payTableStyle';
import { getInputStyle } from '../../style/dynamicStyle';

import { useState } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import Reel from '../reel';
import Button from '../button';

import { togglePopup } from '../popup/popupActions';
//#endregion

const PayTable = ({
  body: { currentTheme }, togglePopup, classes: { table }
}) => {
  const rows = [
    { combination: '3 CHERRY symbols', line: 'Bottom', reward: 4000 },
    { combination: '3 CHERRY symbols', line: 'Top', reward: 2000 },
    { combination: '3 CHERRY symbols', line: 'Center', reward: 1000 },
    { combination: '3 7 symbols', line: 'Any', reward: 150 },
    { combination: 'Any combination of CHERRY and 7', line: 'Any', reward: 75 },
    { combination: '3 3xBAR symbols', line: 'Any', reward: 50 },
    { combination: '3 2xBAR symbols', line: 'Any', reward: 20 },
    { combination: '3 BAR symbols', line: 'Any', reward: 10 },
    { combination: 'Any combination of BAR symbols', line: 'Any', reward: 5 },
  ];

  return (
    <TableContainer component={ Paper }>
      <Table className={ table } size='small' aria-label='Pay Table'>
        <TableHead>
          <TableRow>
            <TableCell>Combination</TableCell>
            <TableCell>Line</TableCell>
            <TableCell align='right'>Reward (€)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(row => (
              <TableRow key={ row.combination }>
                <TableCell component='th' scope='row'>{ row.combination }</TableCell>
                <TableCell align='right'>{ row.line }</TableCell>
                <TableCell align='right'>{ row.reward }</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PayTable.propTypes = {
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
  withStyles(payTableStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(PayTable);
