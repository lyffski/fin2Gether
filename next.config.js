/** @type {import('next').NextConfig} */
const nextConfig = {
   
}

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'beautyou.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'beautyyou.en',
        defaultLocale: 'en-US',
      }
      ],
  },
};

module.exports = nextConfig

module.exports = {
  // Other Next.js configuration options
  allowImportingTsExtensions: true,
};

module.exports = {
    typescript: {
        // Enable importing TypeScript extensions
        allowImportingTsExtensions: true,
      },
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  };
  

 