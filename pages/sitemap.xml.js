import { getPosts } from '../utils/mdx-utils';

export default function Sitemap() {
    // getServerSideProps will handle the sitemap generation
    return null;
}

export async function getServerSideProps({ res }) {
    const posts = await getPosts();
    const baseUrl = 'https://muhammad.my';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${posts
            .map((post) => {
                return `
  <url>
    <loc>${baseUrl}/posts/${post.filePath.replace(/\.mdx?$/, '')}</loc>
    <lastmod>${new Date(post.data.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}
