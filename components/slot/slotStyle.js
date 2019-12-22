import templateStyles from '../../style/template';

const slotStyle = theme =>  ({
  slot: {
    width: '460px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  board: {
    position: 'relative',
    width: '100%',
    height: '242px',
    overflow: 'hidden',
    border: '2px solid',
    borderRadius: 'var(--default-radius)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  controls: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
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
  ...templateStyles.input,
});

export default slotStyle;
