import templateStyles from '../../style/template';

const payTableStyle = theme =>  ({
  table: { width: '460px' },
  header: templateStyles.header,
  winRow: templateStyles.blink,
  ...templateStyles.paper,
});

export default payTableStyle;
