import templateStyles from '../../style/template';

const homeStyle = theme =>  ({
  section: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
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
