import { Helmet } from 'react-helmet-async';
import { Header } from './components/header';
import { Resume } from './components/resume';
import { siteConfig } from './lib/site-config';

export function Root() {
  return (
    <>
      <Helmet>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:site_name" content={siteConfig.siteName} />
        <meta property="og:image" content={siteConfig.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.image} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo.png" type="image/png" sizes="180x180" />
      </Helmet>
      <Header />
      <Resume />
    </>
  );
}
