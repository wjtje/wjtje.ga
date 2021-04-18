<script>
	import Logo from "../components/logo.svelte";
	import { onMount } from "svelte";
	import DownArrow from "../components/down_arrow.svelte";

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

<svelte:head>
	<title>wjtje.ga</title>
	<meta
		name="description"
		content="wjtje - An 18 year old developer that is experimenting with Typescript, React, Flutter and Svelte."
	/>
</svelte:head>

<header>
	{#if ready}
		<Logo />

		<DownArrow />
	{/if}
</header>

<main>
	<h1>This site is still work in progress</h1>

	<article>
		<h2>Projects</h2>
		<ul>
			<li>Trackless</li>
			<li>Trackless for flutter</li>
			<li>2048 for the Casio FX-CG50</li>
			<li>wjtje.ga</li>
			<li>Flutter skeleton animation</li>
		</ul>
	</article>

	<article>
		<h2>About me</h2>
		<p>
			An 18 year old developer that is experimenting with Typescript, React,
			Flutter and Svelte.
		</p>
		<ul>
			<li>Twitter</li>
			<li>Github</li>
			<li>Discord</li>
			<li>Telegram</li>
		</ul>
	</article>
</main>

<style>
	* {
		box-sizing: border-box;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	header {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	main {
		width: 100%;
		min-height: 100vh;
		padding: 0 2rem;
	}
</style>
