<script>
    import Button from './Button.svelte';

    export let title;
    export let background;
    export let description;
    export let id = '';

    $: backgroundImage = `background: linear-gradient(rgba(0, 0, 0, 0) 11%, rgba(0, 0, 0, 0.65) 80%), url(${background}), rgb(28, 28, 28);`;
</script>

<div class="movie-hero" style="{backgroundImage}">
    <div class="movie-hero__content">
        <h1 class="movie-hero__title">{title}</h1>
        <p class="movie-hero__description">{description}</p>
        {#if id !== ''}
            <Button text="View more" light={true}/>
        {/if}
    </div>
</div>

<style>
    .movie-hero {
        display: flex;
        width: 100%;
        height: 40vh;
        background: black;
        position: relative;
        object-fit: contain;
        background-size: 100%, cover !important;
        transition: all ease-in-out 400ms;
    }

    .movie-hero .movie-hero__content {
        display: grid;
        position: absolute;
        bottom: 80px;
        left: 10%;
        right: 10%;
        align-items: center;
        grid-template-columns: 1fr     130px;
        grid-template-rows:    auto    auto;
        grid-template-areas:   "title          title"
                               "description    button";
    }

    .movie-hero .movie-hero__title {
        color: white;
        font-size: 60px;
        grid-area: title;
        margin-bottom: 2rem;
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