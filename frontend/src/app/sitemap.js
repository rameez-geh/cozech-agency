export default function sitemap() {
    const baseUrl = "https://cozech.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/pricing-policy`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/jump-start`,
            lastModified: new Date(),
        },
    ];
}
