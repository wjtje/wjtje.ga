<script>
	import Logo from "../components/Logo.svelte";
	import { onMount } from "svelte";

	let showLogo = false;

	onMount(() => {
		showLogo = true;
	});
</script>

<svelte:head>
	<title>wjtje.ga</title>
	<meta
		name="description"
		content="wjtje - An 18 year old developer that is experimenting with Typescript, React, Flutter and Svelte."
	/>
</svelte:head>

<main>
	{#if showLogo}
		<Logo />
	{/if}
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
