
// You can turn any SvelteKit app, using any adapter, into a fully client-rendered single-page app (SPA) by disabling SSR at the root layout:
export const ssr = true; // If you don't have any server-side logic (i.e. +page.server.js, +layout.server.js or +server.js files) you can use adapter-static to create your SPA by adding a fallback page.

// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = false;	
