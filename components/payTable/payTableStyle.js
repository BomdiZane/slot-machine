import templateStyles from '../../style/template';

const payTableStyle = theme =>  ({
  table: { width: '460px' },
  header: templateStyles.header,
  winRow: { animation: 'blink 2s infinite' },
  ...templateStyles.paper,
});

export default payTableStyle;
