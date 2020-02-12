<script context="module">
	export async function preload({ params, query }) {
		const moviesRes = await this.fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US&page=1');
		const genresRes = await this.fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US');

		const { results: movies } = await moviesRes.json();
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
	import MoviesGrid from '@sapper-template/ui-kit/MoviesGrid.svelte';
	import ScrollToTop from '@sapper-template/ui-kit/ScrollToTop.svelte';

	import { getRandomItemOfArray } from '@helpers/array';
	import { getGenresForMovie } from '@helpers/movies';
	import { maxLength } from '@helpers/string';
	import { onMount, onDestroy } from 'svelte';

	let scrolled = false;
	let currentPage = 1;
	export let movies;
	export let genres;

	onMount(() => {
		setInterval(() => {
			currentHeroMovie = getRandomItemOfArray(movies);
		}, 10000);

		window.addEventListener('scroll', onScroll);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', onScroll);
		}
	});

	let currentHeroMovie = getRandomItemOfArray(movies);
	$: currentHeroMovieGenres = getGenresForMovie(currentHeroMovie, genres);

	async function getMoreMovies() {
		const moviesRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US&page=${currentPage}`);
		const moreMovies = await moviesRes.json();

		if (moviesRes.status === 200) {
			movies = [...movies, ...moreMovies.results];
		}
	}

	const onScroll = () => {
		scrolled = window.scrollY > 0;

		if (Math.round(window.scrollY + window.innerHeight) >= Math.round(document.body.scrollHeight)) {
			currentPage++;
			getMoreMovies();
		}
	};
</script>

<MovieHero
	title="{currentHeroMovie.title}"
	description="{maxLength(currentHeroMovie.overview, 200)}"
	id={currentHeroMovie.id}
	background="{`http://image.tmdb.org/t/p/w1280/${currentHeroMovie.backdrop_path}`}"
/>
<MovieSubHero
	rating={currentHeroMovie.vote_average}
	ratingVotes={currentHeroMovie.vote_count}
	releaseDate={currentHeroMovie.release_date}
	genres={currentHeroMovieGenres}
/>
<MoviesGrid sectionTitle="Popular movies" movies={movies}/>
{#if scrolled}
	<ScrollToTop/>
{/if}