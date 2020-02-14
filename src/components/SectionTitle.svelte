<script>
  export let title
  export let underlined
  export let light = false
</script>

<style>
  .section-title {
    position: relative;
  }

  .section-title__title {
    font-weight: 800;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: right;
    color: black;
  }

  .section-title__light .section-title__title {
    color: white;
  }

  .section-title__underline {
    left: 0;
    right: 0;
    height: 3px;
    bottom: -4px;
    background: black;
    position: absolute;
  }

  .section-title__light .section-title__underline {
    background: white;
  }
</style>

<div class="section-title" class:section-title__light={light}>
  <h1 class="section-title__title">{title}</h1>
  {#if underlined}
    <div class="section-title__underline" />
  {/if}
</div>
