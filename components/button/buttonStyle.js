import pink from '@material-ui/core/colors/pink';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';

export default theme => ({
  root: {
    margin: theme.spacing(4),
    padding: '18px 6px',
    borderRadius: '50px',
    boxShadow: 'var(--default-shadow)'
  },
  primaryRoot: {
    color: theme.palette.getContrastText(cyan[800]),
    backgroundColor: cyan[800],
    '&:hover': {
      backgroundColor: cyan[700],
    },
  },
  disabledRoot: {
    color: theme.palette.getContrastText(grey[800]),
    cursor: 'default',
    backgroundColor: grey[800],
    '&:hover': {
      backgroundColor: grey[800],
    },
  },
  secondaryRoot: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }
});
