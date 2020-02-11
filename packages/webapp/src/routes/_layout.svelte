<script>
  import Nav from '@components/Nav.svelte';

  export let segment
</script>

<style lang="scss" global>
  @import './styles/global.scss';

  main {
    position: relative;
    background-color: white;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
