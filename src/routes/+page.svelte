<script lang="ts">

    import { LightSwitch } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
    import { AppBar } from '@skeletonlabs/skeleton';
    import { writable, type Writable } from 'svelte/store';

	const storeValue: Writable<number> = writable(0);

</script>

<div class="info" description="TopTitle">
	<span>
		<h1>Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation.</p>
	</span>
	<span>
		<h1>Welcome to Skeleton</h1>
		<p>Visit <a href="https://www.skeleton.dev">www.skeleton.dev</a> The UI toolkit for Svelte and Tailwind</p>
	</span>
</div>

<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions) <LightSwitch /> </svelte:fragment>
</AppBar>

<AppRail selected={storeValue}>
	<AppRailTile label="Tile 1" value={0}>(icon)</AppRailTile>
	<AppRailTile label="Tile 2" value={1}>(icon)</AppRailTile>
	<AppRailTile label="Tile 3" value={2}>(icon)</AppRailTile>
</AppRail>

<slot /> <!-- The <slot /> tag is used to define a slot in a Svelte component. Slots allow you to pass content into a component from its parent component, providing a way to create flexible and reusable component compositions. -->

<style>
	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0.2em 1em;
	}
	span p { display: flex; }
</style>
