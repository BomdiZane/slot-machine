//#region imports
import PropTypes from 'prop-types';
import Head from 'next/head';
//#endregion

export default function DynamicHeadElements({ title, isProtected }){
  const openGraphTags = (
    <>
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={ process.env.APP_NAME } />
      <meta property='og:description' content={ process.env.DESCRIPTION } />
      <meta property='og:url' content={ process.env.URL } />
      <meta property='og:site_name' content={ process.env.APP_NAME } />
      <meta property='og:image' content={ `${ process.env.URL }/static/images/logo.png` } />
      <meta name='google-signin-client_id' content='878555846318-p6gkt03i8k8p8i7jj37fp6cv3f5g1e95.apps.googleusercontent.com' />
      <link rel='canonical' href={ process.env.URL } />
    </>
  );

  return (
    <Head>
      <title>{
        title === 'Home' ?
          `${ process.env.APP_NAME }`
          :
          `${ title } - ${ process.env.APP_NAME }` }
      </title>
      {
        isProtected ?
          <meta name='robots' content='noindex, nofollow' />
          :
          openGraphTags
      }
    </Head>
  );
}

DynamicHeadElements.propTypes = {
  title: PropTypes.string.isRequired,
  isProtected: PropTypes.bool,
};

DynamicHeadElements.defaultProps = {
  isProtected: false,
};
