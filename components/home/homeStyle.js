import templateStyles from '../../style/template';

const homeStyle = theme =>  ({
  section: {
    width: '100%',
    margin: 'auto 0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexWrap: 'wrap-reverse',
    paddingBottom: 0,
    '@media (max-width: 770px)': {
      padding: 0,
      margin: 0,
    }
  },
  slot: {
    position: 'relative',
    width: '460px',
    height: '242px',
    overflow: 'hidden',
    border: '2px solid',
    borderRadius: 'var(--default-radius)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  reel: {
    position: 'relative',
    width: '33%',
    minHeight: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '1px solid',
    zIndex: 100
  },
  divider: {
    width: '100%',
    padding: '4px',
    position: 'absolute',
    backgroundColor: 'var(--lightText)',
    zIndex: 50
  },
  topDivider: { top: '25%' },
  middleDivider: { top: '50%' },
  bottomDivider: { top: '75%' },
  ...templateStyles.paper,
});

export default homeStyle;
