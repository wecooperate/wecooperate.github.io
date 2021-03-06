import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'iMonitorSDK',
  favicon: '/assets/logo.png',
  logo: '/assets/logo.png',
  outputPath: 'dist',
  mode: 'site',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/wecooperate/iMonitorSDK',
    },
  ],
  locales: [
    ['cn', '中文'], ['en', 'English']
  ],
  analytics: {
    baidu: '00146cfaaf371815f1ce1bde54fc4307',
  },
});
