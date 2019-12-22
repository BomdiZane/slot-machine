/** Home Page
  *
  * This component serves as the UI entry point to the application
  *
  * @version 1.0.0
  * @created - 2019.08.30
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://portfolio.bomdi.now.sh)
  */

//#region imports
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DynamicHeadElements from '../components/dynamicHeadElements';
import Main from '../components/home';

import { updateCurrentPage } from '../components/body/bodyActions';
//#endregion

const Home = ({ body: { currentPage }, updateCurrentPage }) => {
  useEffect(() => { if (currentPage !== 'home') updateCurrentPage('home'); }, []);

  return (
    <>
      <DynamicHeadElements title='Home' />
      <Main />
    </>
  );
};

const mapStateToProps = state => ({
  body: state.body,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentPage: page => dispatch(updateCurrentPage(page)),
});

Home.propTypes = {
  updateCurrentPage: PropTypes.func.isRequired,
  body: PropTypes.shape({
    currentPage: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
