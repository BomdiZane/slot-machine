import templateStyles from '../../style/template';

const reelStyle = theme =>  ({
  scrollHide: {
    position: 'relative',
    width: '32%',
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
  reel: {
    position: 'relative',
    right: '-10px',
    padding: '0 10px',
    marginRight: '10px',
    maxHeight: '242px',
    overflowX: 'hidden',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'var(--lightDark)',
    zIndex: 90,
  },
  cannotScroll: { overflow: 'hidden' },
  symbol: { position: 'relative' },
  controls: {
    width: '460px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '10px',
    margin: '10px',
  },
  group: {
    width: '32%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    padding: '5px',
    margin: '0',
  },
  reelName: {
    width: '100%',
    textAlign: 'center'
  },
  input: {
    fontSize: '80%',
    color: 'var(--lightText)'
  },
  menu: { width: 200 },
  menuIcon: { color: 'var(--lightText)' },
  animate: {
    animation: 'slide1 0.25s linear 8, slide2 0.25s 2s linear forwards'
  },
  header: {
    ...templateStyles.header,
    padding: 0,
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  ...templateStyles.input,
  ...templateStyles.paper,
});

export default reelStyle;
