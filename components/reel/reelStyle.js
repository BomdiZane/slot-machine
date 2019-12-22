const reelStyle = theme =>  ({
  reel: {
    position: 'relative',
    width: '33%',
    minHeight: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    '&:first-of-type': {
      borderLeft: 'none'
    },
    '&:last-of-type': {
      borderRight: 'none'
    },
    zIndex: 100,
  },
});

export default reelStyle;
