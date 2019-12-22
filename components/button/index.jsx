//#region imports
import buttonStyle from './buttonStyle';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//#endregion

const CustomButton = ({
  classes: { root, primaryRoot, secondaryRoot, disabledRoot }, children, size, variant, type, onClick
}) => {
  let className;

  switch (type) {
    case 'secondary': className = secondaryRoot; break;
    case 'disabled': className = disabledRoot; break;
    default: className = primaryRoot; break;
  }

  return <Button variant={ variant } size={ size } color='primary' onClick={ onClick } className={ classnames(root, className) }>{ children }</Button>;
};

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  type: 'primary',
  size: 'large',
  variant: 'text',
};

export default withStyles(buttonStyle)(CustomButton);
