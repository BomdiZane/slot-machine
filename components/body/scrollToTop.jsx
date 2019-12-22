//#region imports
import bodyStyle from './bodyStyle';

import PropTypes from 'prop-types';
import { useScrollTrigger, Zoom, withStyles } from '@material-ui/core';
//#endregion

const ScrollTop = ({ children, classes: { scrollToTop }}) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const handleClick = event => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Zoom in={ trigger }>
      <div onClick={ handleClick} role='presentation' className={ scrollToTop }>{ children }</div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(bodyStyle)(ScrollTop);
