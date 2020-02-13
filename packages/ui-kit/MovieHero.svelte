<script>
    import Button from './Button.svelte';

    export let title;
    export let background;
    export let description;

    $: backgroundImage = `background: linear-gradient(rgba(0, 0, 0, 0) 11%, rgba(0, 0, 0, 1) 100%), url(${background}), rgb(28, 28, 28);`;
</script>

<style>
    .movie-hero {
        display: flex;
        width: 100%;
        height: 60vh;
        background: black;
        position: relative;
        object-fit: contain;
        background-size: 100%, cover !important;
        background-position: 50% 0 !important;
        transition: all ease-in-out 400ms;
    }

    .movie-hero .movie-hero__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        bottom: 80px;
        left: 10%;
        right: 10%;
    }

    .movie-hero .movie-hero__title {
        color: white;
        font-size: 60px;
        margin-bottom: 2rem;
    }

    .movie-hero .movie-hero__description {
        color: white;
        max-width: 600px;
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 2rem;
    }
</style>

<div class="movie-hero" style="{backgroundImage}">
    <div class="movie-hero__content">
        <h1 class="movie-hero__title">{title}</h1>
        <p class="movie-hero__description">{description}</p>
        <Button text="view more" light on:click/>
    </div>
</div>