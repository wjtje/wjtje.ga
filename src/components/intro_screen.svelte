<script lang="ts">
	import { onMount } from "svelte";
	import DownArrow from "./down_arrow.svelte";
	import Logo from "./logo.svelte";

	// Run the animation on mount
	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<section>
	{#if ready}
		<div class="logo-container">
			<Logo />
		</div>
		<div class="arrow-container">
			<DownArrow />
		</div>
	{/if}
</section>

<style lang="scss">
	@use '../scss/mixins';

	// This will make sure the screen takes up the whole screen
	section {
		@include mixins.screen;
		display: flex;
		flex-direction: column;
	}

	// This will center the logo
	.logo-container {
		justify-content: center;
		display: flex;
		flex-grow: 1;
		padding-top: 5.25rem;
	}

	// This will place the arrow at the bottom of the screen
	.arrow-container {
		display: flex;
		justify-content: center;
		padding: 2rem;
	}
</style>
