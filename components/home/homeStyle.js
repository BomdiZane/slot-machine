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
  basicInfo: {
    width: '45%',
    minWidth: '510px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexGrow: 0.5,
    margin: '10px 30px',
    '@media (max-width: 1300px)': { minWidth: '600px' },
    '@media (max-width: 650px)': { minWidth: '500px' },
    '@media (max-width: 550px)': { minWidth: '400px' },
    '@media (max-width: 450px)': {
      minWidth: '300px',
      width: '100%',
      margin: '10px 0',
    }
  },
  introExtras: {
    width: '45%',
    minWidth: '510px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexGrow: 0.5,
    margin: '10px 30px',
    '@media (max-width: 1300px)': { minWidth: '600px' },
    '@media (max-width: 770px)': {
      margin: 0,
      marginBottom: '10px',
      width: '100%',
      minWidth: '0',
    },
  },
  foreWordDiv: {
    width: '100%',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headline: {
    width: '100%',
    margin: '40px 10px',
    marginTop: 0,
    padding: '0 10px',
    fontSize: '1.8rem',
    color:'unset',
    textAlign: 'center',
    '@media (max-width: 550px)': { fontSize: '1.6rem' },
    '@media (max-width: 450px)': { fontSize: '1.5rem' }
  },
  sub_headline: {
    width: '100%',
    marginBottom: '40px',
    fontSize: '1.5rem',
    color:'unset',
    textAlign: 'center',
    '@media (max-width: 770px)': { display: 'none' },
  },
  free_headline: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '40px',
    fontSize: '1.2rem',
    color:'unset',
    textAlign: 'center',
    '@media (max-width: 770px)': { display: 'none' },
  },
  typography: { padding: theme.spacing(3) },
  dark: {
    backgroundColor: 'var(--primary-black)',
    color: 'var(--secondary-grey)',
  },
  light: {
    backgroundColor: '#f1f1f1',
    color: 'var(--primary-black)',
  },
  skills: {
    '@media (max-width: 1494px)': { padding: '0 21%' },
    '@media (max-width: 1100px)': { display: 'none' },
  },
  ...templateStyles.videoPlayer,
  ...templateStyles.menu,
  ...templateStyles.links,
  ...templateStyles.paper,
});

export default homeStyle;
