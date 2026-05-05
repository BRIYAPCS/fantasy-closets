import { useEffect } from 'react';

const SITE_NAME = 'Fantasy Closets';
const SITE_URL = 'https://fantasycloset.com';
const DEFAULT_IMAGE = `${SITE_URL}/hero_main.jpg`;

const setMeta = (selector, attr, value) => {
  if (value === undefined || value === null) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [type, key] = selector.replace(/[\[\]"]/g, '').split('=');
    el.setAttribute(type, key);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel, href) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertJsonLd = (id, data) => {
  let el = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-seo-id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

/**
 * Updates document title, meta description, canonical URL, OG/Twitter tags,
 * and (optionally) a page-scoped JSON-LD block.
 */
export const useSEO = ({
  title,
  description,
  keywords,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
} = {}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;

    setMeta('meta[name="description"]', 'content', description);
    if (keywords) setMeta('meta[name="keywords"]', 'content', keywords);

    setLink('canonical', url);

    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:type"]', 'content', type);

    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    upsertJsonLd('page-jsonld', jsonLd || null);
  }, [title, description, keywords, path, image, type, jsonLd]);
};
