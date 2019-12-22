export default theme => ({
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
    paddingBottom: '120px',
    minHeight: '100vh',
    flexGrow: 1,
    overflow: 'hidden',
    fontFamily: 'Open Sans, sans-serif !important',
    fontSize: '14px',
    fontWeight: 400,
    color: 'var(--lightText)',
    lineHeight: 1.5,
    textAlign: 'left',
    paddingLeft: 'var(--sidebar-width)',
    '@media (max-width: 770px)': {
      paddingLeft: 0,
      paddingTop: '60px',
    }
  },
  scrollToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: theme.zIndex.drawer + 2
  },
  processingContainer: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000000,
  },
  circularProgress: {
    position: 'fixed',
    top: '30vh'
  },
  progressText: {
    position: 'fixed',
    top: '36vh'
  },
  fab: { zIndex: theme.zIndex.drawer + 2, },
  dark: { backgroundColor: 'var(--secondary-blue)', },
  light: {
    backgroundColor: 'var(--primary-white)',
    color: 'var(--primary-black)',
  },
});
