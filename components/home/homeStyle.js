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
  ...templateStyles.paper,
});

export default homeStyle;
