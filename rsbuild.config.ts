import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { siteConfig } from "./src/lib/site-config"

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: siteConfig.title,
    favicon: './public/favicon.ico',
    appIcon: './public/logo.png',
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      description: siteConfig.description,
      theme_color: '#F0EEEB',
      'og:title': siteConfig.title,
      'og:description': siteConfig.description,
      'og:url': siteConfig.url,
      'og:site_name': siteConfig.siteName,
      'og:image': siteConfig.image,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': siteConfig.title,
      'twitter:description': siteConfig.description,
      'twitter:image': siteConfig.image,
      'twitter:site': '@whynotjatin',
      'x-github:handle': 'jatindotdev',
      'x-linkedin:profile': 'https://www.linkedin.com/in/jatinnkumar',
    }
  }
});
