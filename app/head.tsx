export default function Head() {
  const siteUrl = "https://example.com"; // replace with your domain
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EMPIRE",
    url: siteUrl,
    logo: `${siteUrl}/asset/logo.png`,
    sameAs: [],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EMPIRE Online Cricket ID",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <title>EMPIRE Online Cricket ID — Trusted Cricket ID Provider</title>
      <meta name="description" content="EMPIRE provides fast, secure, and verified online cricket IDs with 24/7 support. Join millions of users for trusted access to live cricket platforms." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={`${siteUrl}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="EMPIRE Online Cricket ID" />
      <meta property="og:description" content="Fast, secure, and verified online cricket IDs with reliable support." />
      <meta property="og:url" content={`${siteUrl}`} />
      <meta property="og:image" content={`${siteUrl}/asset/hero1.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="EMPIRE Online Cricket ID" />
      <meta name="twitter:description" content="Fast, secure, and verified online cricket IDs with reliable support." />
      <meta name="twitter:image" content={`${siteUrl}/asset/hero1.png`} />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
    </>
  );
}
