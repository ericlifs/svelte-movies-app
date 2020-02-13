<script>
  import Header from '@sapper-template/ui-kit/Header.svelte';
</script>

<style lang="scss" global>
  @import './styles/global.scss';

  main {
    position: relative;
    background-color: white;
    box-sizing: border-box;
  }

  .logo {
    font-family: 'Montserrat Subrayada', sans-serif;
  }
</style>

<Header/>

<main>
  <slot />
</main>
