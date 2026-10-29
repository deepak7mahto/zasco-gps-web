import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  path = '', 
  image = '/images/tracking-platform-and-apps.jpg' 
}) => {
  useEffect(() => {
    // 1. Title
    const fullTitle = title.includes('ZASCO') ? title : `${title} – ZASCO GPS`;
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMeta = (nameOrProperty: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${nameOrProperty}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameOrProperty, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    setMeta('property', 'og:title', fullTitle);
    setMeta('name', 'twitter:title', fullTitle);

    const fullUrl = `https://zascogps.com${path}`;
    setMeta('property', 'og:url', fullUrl);

    if (image) {
      const fullImg = image.startsWith('http') ? image : `https://zascogps.com${image}`;
      setMeta('property', 'og:image', fullImg);
      setMeta('name', 'twitter:image', fullImg);
    }
  }, [title, description, path, image]);

  return null;
};
