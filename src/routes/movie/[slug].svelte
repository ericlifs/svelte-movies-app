<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US`
    )
    const creditsRes = await this.fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}/credits?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1`
    )
    const recommendationsRes = await this.fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}/recommendations?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US&page=1`
    )
    const reviewsRes = await this.fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}/reviews?api_key=fd02fbfbbe1a61bc406b87ca6d1852f1&language=en-US&page=1`
    )

    const movie = await res.json()
    const credits = await creditsRes.json()
    const { results: recommendations } = await recommendationsRes.json()
    const { results: reviews } = await reviewsRes.json()

    if (
      res.status === 200 &&
      creditsRes.status === 200 &&
      recommendationsRes.status === 200 &&
      reviewsRes.status === 200
    ) {
      return {
        movie,
        reviews,
        cast: credits.cast.slice(0, 5),
        recommendations: recommendations.slice(0, 5),
      }
    } else {
      this.error(404, 'Not found')
    }
  }
</script>

<script>
  import { goto } from '@sapper/app'
  import { onMount, onDestroy } from 'svelte'

  import MovieHero from '@components/MovieHero.svelte'
  import InformationItem from '@components/InformationItem.svelte'
  import GridItem from '@components/GridItem.svelte'
  import ReviewsSlider from '@components/ReviewsSlider.svelte'
  import Section from '@components/Section.svelte'
  import Button from '@components/Button.svelte'
  import ScrollToTop from '@components/ScrollToTop.svelte'
  import Grid from '@components/Grid.svelte'

  import { getStringFromMap } from '@helpers/array'
  import { getGenresForMovie } from '@helpers/movies'
  import { maxLength, toCurrency } from '@helpers/string'

  export let movie
  export let cast
  export let recommendations
  export let reviews

  let scrolled = false

  $: movieGenres = getGenresForMovie(movie)
  $: mappedReviews = reviews.map(review => ({
    ...review,
    content: maxLength(review.content, 800),
  }))

  onMount(() => {
    window.addEventListener('scroll', onScroll)
  })

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const goToHomePage = () => goto('')
  const goToMoviePage = id => goto(`movie/${id}`)
  const onScroll = () => (scrolled = window.scrollY > 0)
</script>

<style lang="scss">
  .movie-information {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
  }

  .buttons-wrapper {
    position: fixed;
    display: flex;
    right: 10%;
    z-index: 1;
    left: 10%;
    top: 80px;
    align-items: center;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>{movie.title}</title>
</svelte:head>

<div class="buttons-wrapper">
  <Button text="< Home" on:click={goToHomePage} light />
  {#if scrolled}
    <ScrollToTop light />
  {/if}
</div>

<MovieHero
  title={movie.title}
  description={movie.overview}
  background={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
  showButton={false} />

<Section>
  <div class="movie-information">
    <InformationItem
      title="Rating"
      value={`${movie.vote_average} (${movie.vote_count} votes)`} />
    <InformationItem title="Release Date" value={movie.release_date} />
    <InformationItem title="Rating" value={movieGenres} />
    <InformationItem title="Budget" value={toCurrency(movie.budget)} />
    <InformationItem title="Revenue" value={toCurrency(movie.revenue)} />
    <InformationItem title="Popularity" value={movie.popularity} />
    <InformationItem title="Duration" value={`${movie.runtime}mins`} />
    <InformationItem
      title="Spoken languages"
      value={getStringFromMap(movie.spoken_languages, 'name')} />
    <InformationItem
      title="Producers"
      value={getStringFromMap(movie.production_companies, 'name')} />
  </div>
</Section>

<Grid sectionTitle="Cast">
  {#each cast as actor (actor.id)}
    <GridItem
      background={actor.profile_path}
      title={actor.character}
      subtitle={actor.name} />
  {/each}
</Grid>

{#if mappedReviews.length}
  <ReviewsSlider reviews={mappedReviews} sectionTitle="Reviews" />
{/if}

<Grid sectionTitle="Recommendations">
  {#each recommendations as movie (movie.id)}
    <GridItem
      background={movie.poster_path}
      title={movie.title}
      subtitle={`Rating: ${movie.vote_average}`}
      on:click={() => goToMoviePage(movie.id)} />
  {/each}
</Grid>
