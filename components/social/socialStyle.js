import templateStyles from '../../style/template';

const socialStyle = theme => ({
  iconHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '40px 0',
    '@media (max-width: 770px)': {
      margin: '0',
      marginTop: '20px',
    }
  },
  ...templateStyles.socialIcons,
});

export default socialStyle;
