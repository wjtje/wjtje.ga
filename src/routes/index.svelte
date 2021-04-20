<script>
	import AboutScreen from "../components/about_screen.svelte";
	import IntroScreen from "../components/intro_screen.svelte";
	import ProjectsScreen from "../components/projects_screen.svelte";
</script>

<svelte:head>
	<title>wjtje.ga</title>
	<meta
		name="description"
		content="wjtje - An 18 year old developer that is experimenting with Typescript, React, Flutter and Svelte."
	/>
</svelte:head>

<main>
	<IntroScreen />
	<ProjectsScreen />
	<AboutScreen />
</main>

<style lang="scss">
	// This will make the the screens 'snap' into place
	main {
		width: 100%;
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}
</style>
