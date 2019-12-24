import templateStyles from '../../style/template';

const payTableStyle = theme =>  ({
  table: {
    width: '460px',
    position: 'relative'
  },
  header: templateStyles.header,
  winRow: templateStyles.blink,
  historyDiv: {
    position: 'absolute',
    top: '5px',
    right: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: '90%',
    opacity: '0.65',
    marginRight: '6px'
  },
  reward: {
    opacity: '0.85',
  },
  ...templateStyles.paper,
});

export default payTableStyle;
