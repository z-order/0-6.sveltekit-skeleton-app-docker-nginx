import preprocess from 'svelte-preprocess';
/* import adapter from '@sveltejs/adapter-auto'; // default adapter  */
import adapter from '@sveltejs/adapter-static'; // I changed to static adapter
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		/* adapter: adapter() // default adapter */
		adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false,
            strict: false,
			trailingSlash: 'always'
			// By setting trailingSlash to 'always', SvelteKit will generate routes with trailing slashes.
			// For example, /a will be transformed to /a/, resulting in the creation of /a/index.html instead of /a.html when building your static site.
        })
	}
};

export default config;
