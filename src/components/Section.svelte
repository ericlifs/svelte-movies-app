<script>
  import SectionTitle from '@components/SectionTitle.svelte'

  export let sectionTitle = ''
</script>

<style>
  section {
    position: relative;
    background: black;
    padding: 80px 10%;
    color: white;
  }

  .section__content.with-margin {
    margin-top: 2.5rem;
  }
</style>

<section>
  {#if sectionTitle}
    <SectionTitle title={sectionTitle} underlined light />
  {/if}

  <div class="section__content" class:with-margin={sectionTitle}>
    <slot />
  </div>
</section>
