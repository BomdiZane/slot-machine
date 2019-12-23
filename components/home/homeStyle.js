import templateStyles from '../../style/template';

const homeStyle = theme =>  ({
  section: {
    width: '100%',
    margin: 'auto 0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    '@media (max-width: 770px)': {
      margin: 0,
    }
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  ...templateStyles.paper,
});

export default homeStyle;
