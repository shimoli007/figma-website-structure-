import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
}

export function SEOHead({
  title = 'Cynea AI - AI Solutions for SMEs, Corporates & Government',
  description = 'Leading AI solutions provider in the UK, offering automation, blockchain compliance, digital finance, and data analytics services for SMEs, corporates, and government entities.',
  keywords = 'AI solutions, artificial intelligence, automation, blockchain compliance, digital finance, data analytics, UK AI company, business AI, government AI',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Set or update meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph tags
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:type', ogType, 'property');
    setMetaTag('og:image', ogImage, 'property');
    setMetaTag('og:site_name', 'Cynea AI', 'property');

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      setLinkTag('canonical', canonicalUrl);
    }

    // Robots meta tag
    if (noindex) {
      setMetaTag('robots', 'noindex,nofollow');
    } else {
      setMetaTag('robots', 'index,follow');
    }

    // Additional SEO tags
    setMetaTag('author', 'Cynea AI');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#072048'); // Primary brand color
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, noindex]);

  return null; // This component doesn't render anything
}

// Helper function to set meta tags
function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

// Helper function to set link tags
function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

// SEO-optimized schema.org structured data
export function addStructuredData(type: string, data: Record<string, any>) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });

  // Remove existing structured data of the same type
  const existing = document.querySelector(
    `script[type="application/ld+json"]`
  );
  if (existing) {
    existing.remove();
  }

  document.head.appendChild(script);
}
