//#region imports
import { getTypographyStyle } from '../../style/dynamicStyle';
import bodyStyle from './bodyStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, CircularProgress, Typography, Fab, Tooltip } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

import ScrollTop from './scrollToTop';
import Footer from '../footer/footer';
//#endregion

const Body = ({
  children, body: { currentTheme, processing },
  classes: { content, dark, light, processingContainer, circularProgress, progressText, fab },
}) => (
  <main className={ classnames(content, currentTheme === 'dark' ? dark : light) }>
    {
      processing ?
        <div className={ processingContainer }>
          <CircularProgress className={ circularProgress } />
          <Typography variant='body1' className={ progressText } style={ getTypographyStyle(currentTheme) }>...processing...</Typography>
        </div>
        :
        children
    }
    <ScrollTop>
      <Tooltip title='Scroll to top' placement='right'>
        <Fab className={ fab } color='secondary' size='small' aria-label='Scroll to top'>
          <KeyboardArrowUp />
        </Fab>
      </Tooltip>
    </ScrollTop>
    <Footer />
  </main>
);

const mapStateToProps = state => ({
  profile: state.profile,
  body: state.body
});

Body.propTypes = {
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
    processing: PropTypes.bool.isRequired,
  }),
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(bodyStyle),
  connect(mapStateToProps, null)
)(Body);
