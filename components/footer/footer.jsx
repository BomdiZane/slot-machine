//#region imports
import footerStyle from './footerStyle';

import PropTypes from 'prop-types';
import { Avatar, Tooltip, withStyles } from '@material-ui/core';

import { LOGO } from '../../utils/constants';
//#endregion

const Footer = ({ classes: { pageFooter, logo }}) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className={ pageFooter }>
        <Tooltip title='Scroll to top' placement='right'>
          <Avatar className={ logo } alt='logo' src={ LOGO } onClick={ scrollToTop } />
        </Tooltip>
      </footer>
    </>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(footerStyle)(Footer);
