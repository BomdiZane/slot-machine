import templateStyles from '../../style/template';

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
  controls: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '10px',
    marginTop: '20px',
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
