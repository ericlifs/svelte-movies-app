<script>
    export let rating;
    export let ratingVotes = '-';
    export let releaseDate = '-';
    export let genres = '-';
</script>

<style>
    .movie-subhero {
        color: white;
        height: 60px;
        display: grid;
        padding: 0 10%;
        grid-gap: 40px;
        background: black;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
    }

    .movie-subhero .movie-subhero__item {
        display: flex;
        overflow: hidden;
        flex-direction: column;
    }

    .movie-subhero h2 {
        margin: 0;
        overflow: hidden;
        font-size: 1.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

<div class="movie-subhero">
    <div class="movie-subhero__item">
        <label>Rating</label>
        <h2>{rating} ({ratingVotes} votes)</h2>
    </div>
    <div class="movie-subhero__item">
        <label>Release date</label>
        <h2>{releaseDate}</h2>
    </div>
    <div class="movie-subhero__item">
        <label>Genres</label>
        <h2>{genres}</h2>
    </div>
</div>