/** DOM Skeleton
  *
  * A HOC that wraps the app in a boilerplate HTML skeleton
  *
  * @version 1.0.0
  * @created - 2019.12.22
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { LOGO } from '../utils/constants';

class SlotMachineDocument extends Document {
  render() {
    const { pageContext } = this.props;
    const main = pageContext ? pageContext.theme.palette.primary.main : null;

    return (
      <html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='author' content={ process.env.AUTHOR } />
          <meta name='keywords' content={ process.env.KEYWORDS } />
          <meta name='description' content={ process.env.DESCRIPTION } />
          <meta name='format-detection' content='telephone=no' />
          <meta name='viewport' content='minimum-scale=1, initial-scale=1' />
          <meta name='theme-color' content={ main } />

          <meta name='apple-mobile-web-app-title' content={ process.env.APP_NAME } />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='mobile-web-app-capable' content='yes' />

          <link rel='manifest' href='/manifest.json' />
          <link rel='icon' type='image/x-icon' href={ LOGO } />
          <link rel='apple-touch-icon' href={ LOGO } />
          <link rel='stylesheet' type='text/css' href='/nprogress.css' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.1/css/all.css' integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf' crossOrigin='anonymous' />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

SlotMachineDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({ enhanceApp: App => props => sheets.collect(<App {...props} />) });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export default SlotMachineDocument;
