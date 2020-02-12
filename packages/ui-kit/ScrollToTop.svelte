<script>
    const goToTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }
</script>

<style>
    .scroll-to-top {
        right: 50px;
        width: 60px;
        bottom: 50px;
        height: 60px;
        display: flex;
        position: fixed;
        cursor: pointer;
        border-radius: 50%;
        align-items: center;
        border: 3px solid black;
        justify-content: center;
    }

    .scroll-to-top h1 {
        font-weight: 800;
        text-align: center;
    }
</style>

<div class="scroll-to-top" on:click={goToTop}>
    <h1>Go to top</h1>
</div>