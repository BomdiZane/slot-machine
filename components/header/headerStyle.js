export default theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: '0 5%',
    boxShadow: 'var(--default-shadow-blur)'
  },
  menuButton: { marginRight: 10 },
  barRight: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    cursor: 'pointer',
  },
  brandIcon: {
    fontSize: '60%',
    color: 'var(--primary-yellow)'
  },
  iconButtonStyle: { padding: '8px' },
  logo: {
    cursor: 'pointer',
    marginRight: '10px'
  },
  iconStyle: {
    fontSize: '17px',
    '@media (max-height: 900px)': {
      fontSize: '15px',
    },
    '@media (max-height: 780px)': {
      fontSize: '14px',
    },
  },
  divider: {
    width: '50%',
    alignSelf: 'center',
    margin: '1px auto'
  },
  themeButton: { padding: '8px' },
  sun: { color: 'var(--white)' },
  moon: { color: 'var(--secondary-blue)' },
});
