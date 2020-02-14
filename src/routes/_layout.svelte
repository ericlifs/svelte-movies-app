<script>
  import { goto } from '@sapper/app'
  import Header from '@components/Header.svelte'

  const goToHomePage = () => {
    goto('')
  }
</script>

<style lang="scss" global>
  @import './styles/global.scss';

  main {
    position: relative;
    background-color: white;
  }

  .logo {
    font-family: 'Montserrat Subrayada', sans-serif;
  }
</style>

<Header on:logo-click={goToHomePage} />

<main>
  <slot />
</main>
