/** SOCIAL
  *
  * This component presents social media accounts to the client
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import { getSocialIconStyle } from '../../style/dynamicStyle';
import socialStyle from './socialStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { SOCIAL_ACCOUNTS } from '../../utils/constants';
//#endregion

const Social = ({
  body: { currentTheme }, classes: { iconHolder, socialIconsLink, email, facebook, twitter, socialIconsIcon, linkedin, mobile }
}) => {
  const socialIconStyle = getSocialIconStyle(currentTheme);

  return (
    <div className={ iconHolder }>
      <a href={ SOCIAL_ACCOUNTS.linkedin } target='_blank' rel='noopener noreferrer' className={ socialIconsLink }>
        <i className={ classnames('fab fa-linkedin-in', socialIconsIcon, linkedin) } style={ socialIconStyle }></i>
      </a>
      <a href={ SOCIAL_ACCOUNTS.twitter } target='_blank' rel='noopener noreferrer' className={ socialIconsLink }>
        <i className={ classnames('fab fa-twitter', socialIconsIcon, twitter) } style={ socialIconStyle }></i>
      </a>
      <a href={ SOCIAL_ACCOUNTS.facebook } target='_blank' rel='noopener noreferrer' className={ socialIconsLink }>
        <i className={ classnames('fab fa-facebook-f', socialIconsIcon, facebook) } style={ socialIconStyle }></i>
      </a>
      <a href={`mailto:${ SOCIAL_ACCOUNTS.email }`} className={ socialIconsLink }>
        <i className={ classnames('fas fa-at', socialIconsIcon, email) } style={ socialIconStyle }></i>
      </a>
      <a href={`tel:${ SOCIAL_ACCOUNTS.mobile }`} className={ socialIconsLink }>
        <i className={ classnames('fas fa-phone', socialIconsIcon, mobile) } style={ socialIconStyle }></i>
      </a>
    </div>
  );
};

Social.propTypes = {
  body: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }),
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  body: state.body,
});

export default compose(
  withStyles(socialStyle),
  connect(mapStateToProps, null),
)(Social);
