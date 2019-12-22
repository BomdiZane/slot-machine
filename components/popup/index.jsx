//#region imports
import popupStyle from './popupStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconButton, Snackbar, SnackbarContent, withStyles } from '@material-ui/core';
import { CheckCircle, Error, Info, Close, Warning } from '@material-ui/icons';

import { togglePopup } from './popupActions';
//#endregion

const variantIcon = {
	success: CheckCircle,
	warning: Warning,
	error: Error,
	info: Info,
};

const Popup = ({ classes, popup: { open, variant, message, vertical='top', horizontal='right', duration=5000 }, togglePopup }) => {
	const Icon = variantIcon[variant];

	return (
		<Snackbar anchorOrigin={{ vertical, horizontal }} open={ open } key={ message } autoHideDuration={ duration }
			onClose={ () => togglePopup({ open: false }) } style={{ zIndex: 2000 }}
		>
			<SnackbarContent className={ classes[variant] } aria-describedby='client-snackbar'
				message={
					<span id='client-snackbar' className={ classes.message }>
						<Icon className={ classnames(classes.icon, classes.iconVariant) } />
						{ message }
					</span>
				}
				action={
					[
						<IconButton key='close' aria-label='Close' color='inherit' className={ classes.close } onClick={ () => togglePopup({ open: false }) }>
							<Close className={ classes.icon } />
						</IconButton>,
					]
				}
			/>
		</Snackbar>
	);
};

const mapStateToProps = state => ({
	popup: state.popup,
});

const mapDispatchToProps = dispatch => ({
	togglePopup: options => dispatch(togglePopup(options)),
});

Popup.propTypes = {
	classes: PropTypes.object.isRequired,
	togglePopup: PropTypes.func.isRequired,
	popup: PropTypes.shape({
		open: PropTypes.bool.isRequired,
		variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
		message: PropTypes.string.isRequired,
		duration: PropTypes.number,
		vertical: PropTypes.string,
		horizontal: PropTypes.string,
	}),
};

export default compose(
	withStyles(popupStyle),
	connect(mapStateToProps, mapDispatchToProps),
)(Popup);
