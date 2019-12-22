/** Section HOC
	*
	* This is a HOC that wraps sub components and presents them as styled 'section' views
	* that take up an entire row of a page
	*
	* @version 1.0.0
	* @created - 2019.08.30
	* @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://portfolio.bomdi.now.sh)
	*/

//#region imports
import sectionStyle from './sectionStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
//#endregion

const Section = ({
	body: { currentTheme }, children, customStyle, className, classes: { root, header, light, dark }, isHeader
}) => (
	<section
		style={ customStyle }
		className={ classnames(root, className, { [header]: isHeader }, currentTheme === 'dark' ? dark : light) }
	>
		{ children }
	</section>
);

Section.propTypes = {
	body: PropTypes.shape({
		currentTheme: PropTypes.string.isRequired,
	}),
	children: PropTypes.node,
	customStyle: PropTypes.object,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
	isHeader: PropTypes.bool
};

Section.defaultProps = {
	children: '',
	customStyle: {},
	className: '',
	isHeader: false
};

const mapStateToProps = state => ({ body: state.body });

export default compose(
	withStyles(sectionStyle),
	connect(mapStateToProps, null),
)(Section);
