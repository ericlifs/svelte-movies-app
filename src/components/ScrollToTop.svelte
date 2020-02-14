<script>
  export let light = false

  const goToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<style>
  .scroll-to-top {
    width: 60px;
    height: 60px;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    border: 3px solid black;
    justify-content: center;
  }

  .scroll-to-top.light {
    border: 3px solid white;
  }

  .scroll-to-top.light h1 {
    color: white;
  }

  .scroll-to-top h1 {
    font-weight: 800;
    text-align: center;
  }
</style>

<div class="scroll-to-top" on:click={goToTop} class:light>
  <h1>Go to top</h1>
</div>
