
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
      additionalData: `@use "sass:math"; `,
    },
    webpack(config) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
      )
  
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: [{
            loader: '@svgr/webpack',
            // add attributes
            options: {
              svgProps: {
                fill: "currentColor",
                width: "1em",
                height: "1em",
              }
            }
          }
          ],
        },
      )
  
      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i
  
      return config
    },
  };
  
  
  const withNextIntl = createNextIntlPlugin();
  export default withNextIntl(nextConfig);
  