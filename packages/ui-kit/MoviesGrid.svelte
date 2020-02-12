<script>
    export let movies;

    console.log(movies);
</script>

<style>
    .movies-grid {
        display: grid;
        padding: 0 10%;
        grid-gap: 40px;
        margin: 40px 0;
        grid-template-columns: repeat(4, 1fr);
    }

    .movies-grid__movie {
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .movies-grid__movie__image {
        transform: scale(1.1);
        transition: transform ease-in-out 400ms;
        height: 100%;
        width: 100%;
    }

    .movies-grid__movie:hover .movies-grid__movie__image {
        transform: scale(1.2);
    }

    .movies-grid__movie:hover .movies-grid__movie__title {
        visibility: visible;
        opacity: 1;
    }

    .movies-grid__movie__title {
        transition: all ease-in-out 400ms;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        background: black;
        visibility: hidden;
        display: flex;
        padding: 10px;
        color: white;
        height: 50px;
        opacity: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .rating {
        margin-top: .5rem;
        font-weight: 700;
        font-size: .8rem;
    }
</style>

<div class="movies-grid">
    {#each movies as movie (movie.id)}
        <div class="movies-grid__movie">
            <img class="movies-grid__movie__image" alt={movie.id} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            <div class="movies-grid__movie__title">
                <span class="name">{movie.title}</span>
                <span class="rating">Rating {movie.vote_average}</span>
            </div>
        </div>
    {/each}
</div>