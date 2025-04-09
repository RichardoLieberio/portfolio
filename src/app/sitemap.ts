import { MetadataRoute } from 'next';

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_APP_URI}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
            images: [ `${process.env.NEXT_PUBLIC_APP_URI}/Picture.jpeg` ],
        },
    ];
}
