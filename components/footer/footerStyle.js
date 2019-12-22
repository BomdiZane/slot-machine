const footerStyle = theme => ({
  pageFooter : {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '20px 6em',
    '@media (max-width: 770px)': {
      padding: '20px 1em',
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    position: 'relative',
    cursor: 'pointer',
    top: '11px',
    zIndex: theme.zIndex.drawer + 1,
  }
});

export default footerStyle;
