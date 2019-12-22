export const paperStyles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

export const buttonStyles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
});

const templateStyles = {
  sectionHeader: {
    margin: '30px 10px',
    textAlign: 'center',
    width: '100%'
  },
  buttonHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap-reverse',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '0 2%',
    backgroundColor: 'none'
  },
  paper: {
    paperDark: {
      backgroundColor: 'var(--secondary-blue)',
      color: 'var(--lightText)'
    },
    paperLight: {},
  },
  input: {
    textField: {
      margin: '5px',
      width: '45%',
      minWidth: '280px',
    },
    textFieldFull: {
      margin: '5px',
      width: '100%',
    },
    formControlLabel: { margin: '10px 5px' },
    formControlLabelRoot: { color: 'var(--lightText)' },
    darkLabel: {
      color: 'var(--lightText)',
      opacity: 0.65
    },
    labelDark: {
      color: 'var(--lightText)',
      opacity: 0.85
    },
    underline: {
      '&:before': {
        borderColor: 'var(--lightText)',
        opacity: 0.55
      },
      '&:hover': {
        borderColor: 'var(--lightText)',
        opacity: 0.55
      }
    }
  },
  socialIcons: {
    socialIconsLink: {
      margin: '0 15px',
      cursor: 'pointer',
    },
    socialIconsIcon: {
      '@media (max-width: 770px)': {
        width: '20px',
        height: '20px',
        fontSize: '15px',
      }
    },
    linkedin: {
      '&:hover': { color: 'var(--linkedin) !important' }
    },
    email: {
      '&:hover': { color: 'var(--email) !important' }
    },
    facebook: {
      '&:hover': { color: 'var(--facebook) !important' }
    },
    twitter: {
      '&:hover': { color: 'var(--twitter) !important' }
    },
    github: {
      '&:hover': { color: 'var(--github) !important' }
    },
    mobile: {
      '&:hover': { color: 'var(--mobile) !important' }
    },
  },
  icon: {
    fontSize: '16px',
    margin: '5px'
  }
};

export default templateStyles;
