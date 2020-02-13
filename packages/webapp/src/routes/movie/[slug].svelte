<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`https://api.themoviedb.org/3/movie/${params.slug}?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US`);
		const creditsRes = await this.fetch(`https://api.themoviedb.org/3/movie/${params.slug}/credits?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1`);

		const data = await res.json();
		const credits = await creditsRes.json();

		if (res.status === 200 && creditsRes.status === 200) {
			return { movie: data, cast: credits.cast.slice(0, 5) };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import MovieHero from '@sapper-template/ui-kit/MovieHero.svelte';
	import MovieSubHero from '@sapper-template/ui-kit/MovieSubHero.svelte';
	import GridItem from '@sapper-template/ui-kit/GridItem.svelte';

	import Grid from '@components/Grid.svelte';
	import { getGenresForMovie } from '@helpers/movies';

	export let movie;
	export let cast;

	$: movieGenres = getGenresForMovie(movie);
</script>

<svelte:head>
	<title>{movie.title}</title>
</svelte:head>

<MovieHero
	title="{movie.title}"
	description="{movie.overview}"
	background="{`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}"
/>
<MovieSubHero
	rating={movie.vote_average}
	ratingVotes={movie.vote_count}
	releaseDate={movie.release_date}
	genres={movieGenres}
/>
<Grid sectionTitle="Cast">
	{#each cast as actor (actor.id)}
		<GridItem background={actor.profile_path} title={actor.character} subtitle={actor.name}/>
	{/each}
</Grid>
