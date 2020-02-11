<script context="module">
	export async function preload({ params, query }) {
		const moviesRes = await this.fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US&page=1');
		const genresRes = await this.fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US');

		const movies = await moviesRes.json();
		const { genres } = await genresRes.json();

		if (moviesRes.status === 200 && genresRes.status === 200) {
			return { movies, genres };
		} else {
			this.error(moviesRes.status, data.message);
		}
	}
</script>

<script>
	import MovieHero from '@sapper-template/ui-kit/MovieHero.svelte';
	import MovieSubHero from '@sapper-template/ui-kit/MovieSubHero.svelte';
	import { getRandomItemOfArray } from '@helpers/array';
	import { onMount } from 'svelte';

	export let movies;
	export let genres;

	const getGenresForMovie = movie => {
		return (movie.genre_ids || []).reduce((memo, current) => {
			const genre = (genres || []).find(({ id }) => id === current);

			if (memo) {
				return `${memo}, ${genre.name}`;
			}

			return genre.name;
		}, '');
	};

	onMount(() => {
		setInterval(() => {
			currentHeroMovie = getRandomItemOfArray(movies.results);
		}, 10000);
	});

	let currentHeroMovie = getRandomItemOfArray(movies.results);
	$: currentHeroMovieGenres = getGenresForMovie(currentHeroMovie);
</script>

<MovieHero
	title="{currentHeroMovie.title}"
	description="{currentHeroMovie.overview}"
	id={currentHeroMovie.id}
	background="{`http://image.tmdb.org/t/p/w1280/${currentHeroMovie.backdrop_path}`}"
/>
<MovieSubHero
	rating={currentHeroMovie.vote_average}
	ratingVotes={currentHeroMovie.vote_count}
	releaseDate={currentHeroMovie.release_date}
	genres={currentHeroMovieGenres}
/>