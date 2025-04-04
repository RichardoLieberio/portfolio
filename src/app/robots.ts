import { MetadataRoute } from 'next';

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        host: process.env.NEXT_PUBLIC_APP_URI,
        sitemap: `${process.env.NEXT_PUBLIC_APP_URI}/sitemap.xml`,
    };
}
