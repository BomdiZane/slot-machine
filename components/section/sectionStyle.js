const sectionStyle = theme => ({
	root: {
		width: '100%',
		maxWidth: '1800px',
		padding: '20px 8%',
		'@media (max-width: 770px)': {
			padding: '20px 5%',
		}
	},
	header: {
		paddingBottom: '0 !important',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'wrap',
		'@media (max-width: 770px)': {
			justifyContent: 'center',
		}
	},
	light: {},
	dark: {},
});

export default sectionStyle;
