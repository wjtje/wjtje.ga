<script lang="ts">
	import { fly } from "svelte/transition";

	function handleClick() {
		// Scroll to the main content
		window.scrollTo({
			behavior: "smooth",
			top: window.innerHeight,
		});
	}
</script>

<svg
	viewBox="0 0 80 46"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	on:click={handleClick}
	transition:fly={{ y: -100, duration: 1000, delay: 2000 }}
>
	<path
		d="M5.5 6L40 40L74.5 6"
		stroke="white"
		stroke-width="11"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>

<style>
	svg {
		width: 2rem;
		position: absolute;
		display: block;
		top: 92vh;
		cursor: pointer;
	}
</style>
