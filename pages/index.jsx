/** Home Page
  *
  * This component serves as the UI entry point to the application
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import DynamicHeadElements from '../components/dynamicHeadElements';
import Main from '../components/home';
//#endregion

const Home = () => (
  <>
    <DynamicHeadElements title='Home' />
    <Main />
  </>
);

export default Home;
