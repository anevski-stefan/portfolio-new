import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

export default function SEO({ 
  title = 'Your Name - Portfolio',
  description = 'Frontend Developer specializing in React, Next.js, and modern web technologies.',
  image = '/og-image.png' // Add your OG image in public folder
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </Head>
  )
} 