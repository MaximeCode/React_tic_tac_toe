export default function manifest() {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/webp",
        form_factor: "wide",
        label: "Home screen showing main navigation and featured content"
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/webp",
        platform: "ios",
        label: "Dashboard view displaying key metrics"
      }
    ]
  }
}