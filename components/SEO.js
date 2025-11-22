import Head from 'next/head';

export default function SEO({ title, description, image, url, type = 'website' }) {
  const siteTitle = 'Muhammad.my Blog';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = description || 'A premium Next.js blog with Antigravity theme featuring blue and purple gradients, glassmorphism effects, and modern design.';
  const siteUrl = url || 'https://muhammad.my';
  const siteImage = image || 'https://muhammad.my/og-image.png';

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="author" content="Muhammad" />
      <meta name="keywords" content="blog, Next.js, React, Antigravity, web development, programming, tech" />

      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0b0f19" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'BlogPosting' : 'Blog',
            name: fullTitle,
            description: siteDescription,
            url: siteUrl,
            author: {
              '@type': 'Person',
              name: 'Muhammad',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Muhammad.my Blog',
              logo: {
                '@type': 'ImageObject',
                url: 'https://muhammad.my/muhammad-logo.png',
              },
            },
            image: siteImage,
          }),
        }}
      />
    </Head>
  );
}
