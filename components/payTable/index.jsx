/** PAY TABLE
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import payTableStyle from './payTableStyle';
import { getTypographyStyle } from '../../style/dynamicStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';

import { addCurrencyFormat } from '../../utils/helpers';
//#endregion

const PayTable = ({
  body: { currentTheme }, payTable: { winRows, lastReward }, slot: { isSpinning },
  classes: { table, paperDark, paperLight, header, winRow, historyDiv, label, reward }
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

  const typographyStyle = getTypographyStyle(currentTheme);

  return (
    <TableContainer className={ classnames(table, currentTheme === 'dark' ? paperDark : paperLight) } component={ Paper }>
      <Typography className={ header } style={ typographyStyle } variant='h6'>Pay Table</Typography>
      <div className={ historyDiv }>
        <Typography className={ label } style={ typographyStyle } variant='body1'>Last reward: </Typography>
        <Typography className={ reward } style={ typographyStyle } variant='body1'>{ lastReward ? addCurrencyFormat(lastReward) : '€0.0' }</Typography>
      </div>
      <Table size='small' aria-label='Pay Table'>
        <TableHead>
          <TableRow>
            <TableCell><strong style={ typographyStyle }>Combination</strong></TableCell>
            <TableCell><strong style={ typographyStyle }>Line</strong></TableCell>
            <TableCell align='right'><strong style={ typographyStyle }>Reward (€)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row, index) => (
              <TableRow key={ index } className={ !isSpinning && winRows.includes(index + 1) ? winRow : '' }>
                <TableCell style={ typographyStyle }>{ row.combination }</TableCell>
                <TableCell style={ typographyStyle }>{ row.line }</TableCell>
                <TableCell style={ typographyStyle } align='right'>{ row.reward }</TableCell>
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
  payTable: PropTypes.shape({
    winRows: PropTypes.array.isRequired,
    lastReward: PropTypes.number.isRequired,
  }),
  slot: PropTypes.shape({
    isSpinning: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  body: state.body,
  payTable: state.payTable,
  slot: state.slot,
});

export default compose(
  withStyles(payTableStyle),
  connect(mapStateToProps, null)
)(PayTable);
