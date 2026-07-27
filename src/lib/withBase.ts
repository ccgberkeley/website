// Prefixes a root-relative public-asset path (e.g. "/assets/logo.png") with
// the app's deploy base path. Vite only rewrites base-relative URLs it can
// see at build time (index.html, CSS url(), imported assets) — plain string
// literals in JSX like `src="/assets/logo.png"` are invisible to that
// rewrite, so every one of them has to go through this helper instead.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL
  return base.endsWith('/') ? base.slice(0, -1) + path : base + path
}
