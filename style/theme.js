import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#17a2b8'
    },
    error: {
      main: red.A400,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  props: {
    MuiButton: {
      size: 'small',
      color: 'primary',
      variant: 'text'
    },
    MuiCircularProgress: {
      size: 30,
      thickness: 3,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '11px',
        backgroundColor: '#1f2933',
        color: '#fafafa',
      }
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: 'var(--progress-blue)',
        marginTop: '20px',
        margin: 'auto'
      }
    },
    MuiTypography: {
      root: {
        cursor: 'default',
        fontFamily: 'Montserrat'
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none'
      }
    },
    MuiMenu: {
      paper: {
        maxHeight: '40vh'
      }
    },
    MuiAvatar: {
      img: {
        backgroundColor: 'transparent'
      }
    }
  },
});

export default theme;
