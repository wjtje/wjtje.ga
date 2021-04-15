<script lang="ts">
	import { linear, cubicInOut } from "svelte/easing";
	import { fade, draw } from "svelte/transition";

	import type { TransitionConfig, FadeParams } from "svelte/transition";

	/**
	 * This is like the fade animation, but is will hide the element
	 */
	function fadeInverse(
		node: Element,
		{ delay = 0, duration = 400, easing = linear }: FadeParams = {}
	): TransitionConfig {
		return {
			delay,
			duration,
			easing,
			css: (t) => {
				console.log(t);
				return `opacity: ${Math.abs(1 - t)}`;
			},
		};
	}
</script>

<svg
	viewBox="0 0 456 84"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	id="main-logo"
>
	<g
		transition:fadeInverse={{ delay: 800, easing: cubicInOut }}
		style="opacity: 0"
		id="main-logo-outline"
	>
		<path
			transition:draw
			d="M21.9169 70.6989L0.91693 20.6989C-2.58308 5.19882 16.9169 -0.801177 23.4169 12.1989L33.4169 36.1989L43.4169 12.1989C47.9169 3.19885 59.9169 2.19884 65.4169 12.1989L75.417 36.1989L85.4169 12.1989C92.4169 -1.30115 111.417 5.69885 107.917 20.6989L86.9169 70.6989C82.4169 81.6989 68.4169 82.1989 63.9169 70.6989L54.4169 48.1989L44.9169 70.6989C41.4169 81.6989 25.9169 82.1989 21.9169 70.6989Z"
		/>
		<path
			transition:draw
			d="M143.917 29.4652H156.917L156.917 50.6989C156.917 54.6989 151.099 55.9953 146.917 52.6989C137.917 44.1989 125.917 51.6989 126.417 61.6989C126.917 71.6989 141.417 79.1989 152.417 79.1989C163.417 79.1989 178.917 70.1989 180.917 52.6989V16.6989C180.417 10.6989 175.417 5.69885 168.917 5.69885H142.417C128.417 7.19885 127.917 28.6989 143.917 29.4652Z"
		/>
		<path
			transition:draw
			d="M213.917 29H233.417V67.6989C233.417 81 257.417 82.5 257.417 67.3544L257.417 32C257.417 32 257.5 31 258.5 30C259.5 29 261 29 261 29H276.917C292.917 29 292.917 5.69887 277.917 5.69887H213.917C199.417 5.69887 196.917 28 213.917 29Z"
			stroke-linejoin="round"
		/>
		<path
			transition:draw
			d="M325.432 29.4652H338.432L338.432 50.6989C338.432 54.6989 332.615 55.9953 328.432 52.6989C319.432 44.1989 307.432 51.6989 307.932 61.6989C308.432 71.6989 322.932 79.1989 333.932 79.1989C344.932 79.1989 360.432 70.1989 362.432 52.6989V16.6989C361.932 10.6989 356.932 5.69885 350.432 5.69885H323.932C309.932 7.19885 309.432 28.6989 325.432 29.4652Z"
		/>
		<path
			transition:draw
			d="M442.917 5.69885H399.917C393.417 5.69885 387.917 11.1989 387.917 16.6989V67.6989C387.917 73.6989 393 79 399 79H442C458 79 458 55 442 55H412V54H435C450 53 449 30 435 30H412V29H443C457 29 456.917 5.69885 442.917 5.69885Z"
			stroke-linejoin="round"
		/>
	</g>
	<g
		transition:fade={{ delay: 800, easing: cubicInOut, duration: 800 }}
		id="main-logo-color"
	>
		<path d="M442 67L400 67" stroke="url(#paint_w_1)" />
		<path d="M400 67L400 42" stroke="url(#paint_w_2)" />
		<path d="M400 42L434 42" stroke="url(#paint_w_3)" />
		<path d="M400 42L400 17.0001" stroke="url(#paint_w_4)" />
		<path d="M400 17.0001L442 17.0001" stroke="url(#paint_j_1)" />
		<path d="M325.5 17.3145L350.5 17.3145" stroke="url(#paint_j_2)" />
		<path
			d="M350.5 17.3145L350.5 51.3145C348.5 68.8145 329 70.8145 320 60.8144"
			stroke="url(#paint_t_1)"
		/>
		<path
			d="M245.5 66.5001V32.5C245.5 24 253 17 262.5 17.0001"
			stroke="url(#paint_t_2)"
		/>
		<path d="M214 17.0001H277.5" stroke="url(#paint_j_1)" />
		<path d="M144 17.0001L169 17.0001" stroke="url(#paint_j_2)" />
		<path
			d="M169 17.0001L169 51.0001C167 68.5001 147.5 70.5001 138.5 60.5"
			stroke="url(#paint_e_1)"
		/>
		<path
			d="M12.5005 16.5158L33.4963 66.5175L12.4479 16.5276"
			stroke="url(#paint_e_2)"
		/>
		<path d="M33.4475 66.5118L54.4474 16.5119" stroke="url(#paint_e_3)" />
		<path d="M54.4474 16.5119L75.4474 66.5118" stroke="url(#paint_e_4)" />
		<path d="M75.4474 66.5118L96.4473 16.5119" stroke="url(#paint_e_5)" />
	</g>
	<defs>
		<linearGradient
			id="paint_w_1"
			x1="442"
			y1="67"
			x2="400"
			y2="67"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#448B1B" />
			<stop offset="1" stop-color="#519819" />
		</linearGradient>
		<linearGradient
			id="paint_w_2"
			x1="400"
			y1="67"
			x2="400"
			y2="42"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#4E951A" />
			<stop offset="1" stop-color="#559C18" />
		</linearGradient>
		<linearGradient
			id="paint_w_3"
			x1="434"
			y1="42"
			x2="400"
			y2="42"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#61A717" />
			<stop offset="1" stop-color="#6DB215" />
		</linearGradient>
		<linearGradient
			id="paint_w_4"
			x1="400"
			y1="42"
			x2="400"
			y2="17"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#69AF16" />
			<stop offset="1" stop-color="#74B914" />
		</linearGradient>
		<linearGradient
			id="paint_j_1"
			x1="400"
			y1="13"
			x2="442"
			y2="13"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#71B615" />
			<stop offset="1" stop-color="#7EC213" />
		</linearGradient>
		<linearGradient
			id="paint_j_2"
			x1="325.5"
			y1="17.3144"
			x2="350.5"
			y2="17.3144"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#468D1A" />
			<stop offset="1" stop-color="#569D18" />
		</linearGradient>
		<linearGradient
			id="paint_t_1"
			x1="323"
			y1="62.3144"
			x2="350.5"
			y2="29.3144"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#7EC213" />
			<stop offset="1" stop-color="#569D18" />
		</linearGradient>
		<linearGradient
			id="paint_t_2"
			x1="246"
			y1="17"
			x2="246"
			y2="67"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#65AA16" />
			<stop offset="0.0001" stop-color="#569D18" />
			<stop offset="1" stop-color="#428A1B" />
		</linearGradient>
		<linearGradient
			id="paint_e_1"
			x1="141.5"
			y1="62"
			x2="169"
			y2="29"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#7EC213" />
			<stop offset="1" stop-color="#569D18" />
		</linearGradient>
		<linearGradient
			id="paint_e_2"
			x1="33.4965"
			y1="66.5176"
			x2="12.5007"
			y2="16.5158"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#438B1B" />
			<stop offset="1" stop-color="#539A19" />
		</linearGradient>
		<linearGradient
			id="paint_e_3"
			x1="33.4472"
			y1="68.5118"
			x2="54.4473"
			y2="14.5118"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#539A19" />
			<stop offset="1" stop-color="#62A817" />
		</linearGradient>
		<linearGradient
			id="paint_e_4"
			x1="54.9472"
			y1="16.5118"
			x2="74.9472"
			y2="66.5118"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#62A817" />
			<stop offset="1" stop-color="#72B715" />
		</linearGradient>
		<linearGradient
			id="paint_e_5"
			x1="75.4472"
			y1="66.5118"
			x2="96.4472"
			y2="14.5118"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#72B715" />
			<stop offset="1" stop-color="#7EC213" />
		</linearGradient>
	</defs>
</svg>

<style>
	/* Make the logo the correct size */
	#main-logo {
		width: 80vw;
	}

	@media (min-width: 640px) {
		#main-logo {
			width: 75vw;
		}
	}

	@media (min-width: 768px) {
		#main-logo {
			width: 70vw;
		}
	}

	@media (min-width: 1024px) {
		#main-logo {
			width: 65vw;
		}
	}

	@media (min-width: 1280px) {
		#main-logo {
			width: 60vw;
		}
	}

	/* Make the colored lines look good */
	#main-logo-color {
		stroke-width: 24px;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	/* Add dark mode support */
	#main-logo-outline {
		stroke: black;
	}

	@media (prefers-color-scheme: dark) {
		#main-logo-outline {
			stroke: white;
		}
	}
</style>
