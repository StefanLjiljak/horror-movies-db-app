import Header from '../components/Header';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import theme from '../theme/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import ContextWrapper from '../components/ContextWrapper';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  );
}
export default MyApp;
