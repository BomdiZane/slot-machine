const snackbarStyle = theme => ({
	success: { backgroundColor: 'var(--green)' },
	error: { backgroundColor: theme.palette.error.dark },
	info: { backgroundColor: 'var(--cyan)' },
	warning: { backgroundColor: 'var(--secondary-yellow)' },
	icon: { fontSize: 20 },
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1),
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	},
});

export default snackbarStyle;
