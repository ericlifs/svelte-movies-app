<script>
  import InformationItem from '@components/InformationItem.svelte'

  export let rating
  export let ratingVotes = '-'
  export let releaseDate = '-'
  export let genres = '-'
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
</style>

<div class="movie-subhero">
  <InformationItem title="Rating" value={`${rating} (${ratingVotes} votes)`} />
  <InformationItem title="Release date" value={releaseDate} />
  <InformationItem title="Genres" value={genres} />
</div>
