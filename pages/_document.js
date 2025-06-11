import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">      <Head>        <meta charSet="utf-8" />
        
        {/* Performance optimizations */}
        <link rel="preload" href="/my-photo.jpg?v=6&t=20250611200000" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical rendering path optimization */}
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        
        {/* Favicon configuration */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
