//#region imports
import PropTypes from 'prop-types';
import { useScrollTrigger, Slide } from '@material-ui/core';
//#endregion

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return <Slide appear={ false } direction='down' in={ !trigger }>{ children }</Slide>;
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};

export default HideOnScroll;
