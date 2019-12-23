export default theme => ({
  root: { alignSelf: 'center' },
  switchBase: {
    '&$checked': {
      '& + $track': { backgroundColor: 'var(--cyan)' },
      '& $thumb': { backgroundColor: 'var(--cyan)' },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  checked: {
    transform: 'translateX(15px)',
    '& + $track': { border: 'none' },
  },
  track: {
    border: 'solid 1px',
    borderColor: 'var(--red)',
    backgroundColor: 'var(--red)',
    transition: theme.transitions.create(['background-color', 'border']),
  },
  thumb: { backgroundColor: 'var(--red)' },
});
