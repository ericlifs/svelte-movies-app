<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US&page=1`);
		const movies = await res.json();

		if (res.status === 200) {
			return { movies };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import MovieHero from '@sapper-template/ui-kit/MovieHero.svelte';
	import { getRandomItemOfArray } from '@helpers/array';
	import { onMount } from 'svelte';

	export let movies;

	let currentHeroMovie = getRandomItemOfArray(movies.results);

	onMount(() => {
		setInterval(() => {
			currentHeroMovie = getRandomItemOfArray(movies.results);
		}, 10000);
	});
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<MovieHero
	title="{currentHeroMovie.title}"
	description="{currentHeroMovie.overview}"
	id={currentHeroMovie.id}
	background="{`http://image.tmdb.org/t/p/w1280/${currentHeroMovie.backdrop_path}`}"
/>