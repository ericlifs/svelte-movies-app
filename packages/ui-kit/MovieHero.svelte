<script>
    import Button from './Button.svelte';

    export let title;
    export let background;
    export let description;
    export let id = '';

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
        display: grid;
        position: absolute;
        bottom: 80px;
        left: 10%;
        right: 10%;
        align-items: center;
        grid-gap: 2rem;
        grid-template-columns: 130px   1fr;
        grid-template-rows:    auto    auto    auto;
        grid-template-areas:   "title          title"
                               "description    description"
                               "button         button" ;
    }

    .movie-hero .movie-hero__title {
        color: white;
        font-size: 60px;
        grid-area: title;
    }

    .movie-hero .movie-hero__description {
        margin: 0;
        color: white;
        max-width: 600px;
        font-size: 1rem;
        line-height: 1.5rem;
        grid-area: description;
    }
</style>

<div class="movie-hero" style="{backgroundImage}">
    <div class="movie-hero__content">
        <h1 class="movie-hero__title">{title}</h1>
        <p class="movie-hero__description">{description}</p>
        {#if id !== ''}
            <Button text="view more" light/>
        {/if}
    </div>
</div>