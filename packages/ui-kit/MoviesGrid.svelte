<script>
    import SectionTitle from './SectionTitle.svelte';
    import MoviePoster from './MoviePoster.svelte';

    export let sectionTitle;
    export let movies;
</script>

<style>
    .movies-grid {
        display: flex;
        padding: 0 10%;
        margin: 60px 0;
        flex-direction: column;
    }

    .movies-grid__grid {
        display: grid;
        grid-gap: 40px;
        margin-top: 40px;
        grid-template-columns: repeat(5, 1fr);
    }
</style>

<div class="movies-grid">
    {#if sectionTitle}
        <SectionTitle title={sectionTitle} underlined />
    {/if}
    <div class="movies-grid__grid">
        {#each movies as movie (movie.id)}
            <MoviePoster id={movie.id} poster={movie.poster_path} title={movie.title} rating={movie.vote_average} on:view-more/>
        {/each}
    </div>
</div>
