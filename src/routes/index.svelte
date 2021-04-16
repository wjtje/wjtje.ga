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
</svelte:head>

<main>
	{#if showLogo}
		<Logo />
	{/if}
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
