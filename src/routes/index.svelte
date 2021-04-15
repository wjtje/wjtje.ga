<script>
	import Logo from "../components/Logo.svelte";
	import { onMount } from "svelte";

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>wjtje.ga</title>
</svelte:head>

<main>
	{#if visible}
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
