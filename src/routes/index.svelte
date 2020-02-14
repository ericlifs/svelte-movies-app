<script context="module">
  import { getUrlForRequest } from '@config'
  import ENDPOINTS from '@config/endpoints'

  export async function preload({ params, query }) {
    const moviesRes = await this.fetch(
      getUrlForRequest(`${ENDPOINTS.MOVIE}/${ENDPOINTS.POPULAR}`)
    )
    const genresRes = await this.fetch(getUrlForRequest(ENDPOINTS.GENRES))

    const { results: movies } = await moviesRes.json()
    const { genres } = await genresRes.json()

    if (moviesRes.status === 200 && genresRes.status === 200) {
      return { movies, genres }
    } else {
      this.error(moviesRes.status, data.message)
    }
  }
</script>

<script>
  import { goto } from '@sapper/app'
  import { onMount, onDestroy } from 'svelte'

  import MovieHero from '@components/MovieHero.svelte'
  import MovieSubHero from '@components/MovieSubHero.svelte'
  import ScrollToTop from '@components/ScrollToTop.svelte'
  import GridItem from '@components/GridItem.svelte'
  import Grid from '@components/Grid.svelte'

  import { getUrlForAsset } from '@config'
  import { getRandomItemOfArray } from '@helpers/array'
  import { getGenresForPopularMovie } from '@helpers/movies'
  import { maxLength } from '@helpers/string'

  let scrolled = false
  let currentPage = 1
  export let movies
  export let genres

  onMount(() => {
    setInterval(() => {
      currentHeroMovie = getRandomItemOfArray(movies)
    }, 10000)

    window.addEventListener('scroll', onScroll)
  })

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScroll)
    }
  })

  let currentHeroMovie = getRandomItemOfArray(movies)
  $: currentHeroMovieGenres = getGenresForPopularMovie(currentHeroMovie, genres)

  const getMoreMovies = async () => {
    const moviesRes = await fetch(
      getUrlForRequest(`${ENDPOINTS.MOVIE}/${ENDPOINTS.POPULAR}`, currentPage)
    )
    const moreMovies = await moviesRes.json()

    if (moviesRes.status === 200) {
      movies = [...movies, ...moreMovies.results]
    }
  }

  const onScroll = () => {
    scrolled = window.scrollY > 0

    if (
      Math.round(window.scrollY + window.innerHeight) >=
      Math.round(document.body.scrollHeight)
    ) {
      currentPage++
      getMoreMovies()
    }
  }

  const goToMoviePage = id => {
    goto(`movie/${id}`)
  }
</script>

<style lang="scss">
  .scroll-to-top-wrapper {
    position: fixed;
    bottom: 80px;
    right: 80px;
  }
</style>

<svelte:head>
  <title>Svelte Cinema</title>
</svelte:head>

<MovieHero
  title={currentHeroMovie.title}
  description={maxLength(currentHeroMovie.overview, 200)}
  background={getUrlForAsset(currentHeroMovie.backdrop_path, 1280)}
  on:click={() => goToMoviePage(currentHeroMovie.id)} />
<MovieSubHero
  rating={currentHeroMovie.vote_average}
  ratingVotes={currentHeroMovie.vote_count}
  releaseDate={currentHeroMovie.release_date}
  genres={currentHeroMovieGenres} />
<Grid sectionTitle="Popular movies">
  {#each movies as movie (movie.id)}
    <GridItem
      background={movie.poster_path}
      title={movie.title}
      subtitle={`Rating: ${movie.vote_average}`}
      on:click={() => goToMoviePage(movie.id)} />
  {/each}
</Grid>
{#if scrolled}
  <div class="scroll-to-top-wrapper">
    <ScrollToTop />
  </div>
{/if}
