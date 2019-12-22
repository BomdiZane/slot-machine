import templateStyles from '../../style/template';

const payTableStyle = theme =>  ({
  table: { width: '460px' },
  header: {
    width: '100%',
    margin: '0',
    padding: '10px',
  },
  ...templateStyles.paper,
});

export default payTableStyle;
