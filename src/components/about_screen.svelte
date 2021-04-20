<section>
	<h5>About</h5>
</section>

<style lang="scss">
	@use '../scss/fonts';
	@use '../scss/mixins';

	section {
		@include mixins.screen;
		padding: 2rem;
	}

	h5 {
		@include fonts.h5;
	}
</style>
