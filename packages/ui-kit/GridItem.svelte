<script>
    export let background;
    export let title = '-';
    export let subtitle = '-';
</script>

<style>
    .grid-item {
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .grid-item__background {
        transform: scale(1.1);
        transition: transform ease-in-out 400ms;
        height: 100%;
        width: 100%;
    }

    .grid-item:hover .grid-item__background {
        transform: scale(1.2);
    }

    .grid-item:hover .grid-item__description {
        visibility: visible;
        opacity: 1;
    }

    .grid-item__description {
        transition: all ease-in-out 400ms;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        background: black;
        visibility: hidden;
        display: flex;
        padding: 10px;
        color: white;
        height: 50px;
        opacity: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .rating {
        margin-top: .5rem;
        font-weight: 700;
        font-size: .8rem;
    }
</style>

<div class="grid-item" on:click>
    <img class="grid-item__background" alt={title} src={`https://image.tmdb.org/t/p/w300/${background}`} />
    <div class="grid-item__description">
        <span class="name">{title}</span>
        <span class="rating">{subtitle}</span>
    </div>
</div>