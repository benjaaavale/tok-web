/**
 * Cloudflare Pages catch-all function for SPA routing.
 * Serves index.html for any path that doesn't match a static asset,
 * so React Router can handle client-side navigation.
 */
export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Let static assets pass through normally
  const isStaticAsset =
    pathname.startsWith('/static/') ||
    pathname.startsWith('/images/') ||
    /\.(js|css|png|jpg|jpeg|svg|ico|json|txt|webmanifest|woff|woff2|map|html)$/.test(pathname);

  if (isStaticAsset) {
    return next();
  }

  // For all app routes, serve index.html directly (preserving the original URL)
  const indexUrl = new URL('/index.html', url.origin);
  return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
}
