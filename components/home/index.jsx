//#region imports
import homeStyles from './homeStyle';
import { getVideoMenuStyle, getPlaylistMenuIconStyle } from '../../style/dynamicStyle';

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Typography, CircularProgress, IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { MoreVert, PlayArrowRounded } from '@material-ui/icons';

import Section from '../section/section';

import { togglePopup } from '../popup/popupActions';
import { DEFAULT_VIDEO_MIME_TYPE, CURRENTLY_WATCHING_INTRO, INFO_EDIT_ROLES, UNAUTHORIZED_MESSAGE } from '../../utils/constants';
import { formatName } from '../../utils/helpers';
//#endregion

const Main = ({
  body: { currentTheme }, togglePopup,
  classes: {
    basicInfo, foreWordDiv, introExtras, sub_headline, free_headline, section, videoPlayer, videoID, videoMenu, menuItem,
    videoIcon, videoActiveIcon, videoMenuControls, videoMenuPopup, paperDark, paperLight, videoIconButton, videoControlIcon, skills
  }
}) => {
  const [playList, setPlayList] = useState(null);

  // useEffect(() => { setPlayList(info.introVideos.sort(sortByHierarchy)); }, [info]);

  return (
    <Section className={ section }>
      Welcome!
    </Section>
  );
};

Main.propTypes = {
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
  withStyles(homeStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(Main);
