import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "personal-portfolio-delta-murex.vercel.app"!,
      lastModified: new Date(),
    }, 
    {
      url: "personal-portfolio-delta-murex.vercel.app" + 'copyright/privacy',
      lastModified: new Date(),
    }, 
    {
      url: "personal-portfolio-delta-murex.vercel.app" + 'copyright/terms',
      lastModified: new Date(),
    }
  ];
}``