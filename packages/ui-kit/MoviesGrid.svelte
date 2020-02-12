<script>
    import MoviePoster from './MoviePoster.svelte';

    export let movies;
</script>

<style>
    .movies-grid {
        display: grid;
        padding: 0 10%;
        grid-gap: 40px;
        margin: 40px 0;
        grid-template-columns: repeat(4, 1fr);
    }
</style>

<div class="movies-grid">
    {#each movies as movie (movie.id)}
        <MoviePoster id={movie.id} poster={movie.poster_path} title={movie.title} rating={movie.vote_average} />
    {/each}
</div>