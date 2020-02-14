<script>
  import Section from '@components/Section.svelte'

  export let reviews
  export let activeIndex = 0
  export let sectionTitle = ''

  const nextSlide = () => {
    if (activeIndex + 1 === reviews.length) {
      return (activeIndex = 0)
    }

    activeIndex = activeIndex + 1
  }

  const previousSlide = () => {
    if (activeIndex === 0) {
      activeIndex = reviews.length - 1
    }

    activeIndex = activeIndex - 1
  }

  $: activeSlide = reviews[activeIndex]
</script>

<style>
  .reviews-slider__author {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  .reviews-slider__content {
    line-height: 1.5rem;
  }

  .reviews-slider__read-more {
    margin-top: 1.5rem;
  }

  .reviews-slider__previous-slide,
  .reviews-slider__next-slide {
    position: absolute;
    font-size: 4rem;
    cursor: pointer;
  }

  .reviews-slider__previous-slide {
    transform: translate(-50%, -50%);
    left: 5%;
    top: 50%;
  }

  .reviews-slider__next-slide {
    transform: translate(50%, -50%);
    right: 5%;
    top: 50%;
  }
</style>

<Section {sectionTitle}>
  {#if reviews.length > 1}
    <div class="reviews-slider__previous-slide" on:click={previousSlide}>‹</div>
    <div class="reviews-slider__next-slide" on:click={nextSlide}>›</div>
  {/if}

  <h2 class="reviews-slider__author" class:with-margin={sectionTitle !== ''}>
    {activeSlide.author}
  </h2>
  <h2 class="reviews-slider__content">{activeSlide.content}</h2>

  {#if activeSlide.url}
    <h4 class="reviews-slider__read-more">
      Read more at:
      <a href={activeSlide.url} target="_blank">{activeSlide.url}</a>
    </h4>
  {/if}
</Section>
