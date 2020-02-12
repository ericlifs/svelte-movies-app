<script>
    export let title;
    export let underlined;
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

    .section-title__underline {
        left: 0;
        right: 0;
        height: 3px;
        bottom: -4px;
        background: black;
        position: absolute;
    }
</style>

<div class="section-title">
    <h1 class="section-title__title">{title}</h1>
    {#if underlined}
        <div class="section-title__underline"></div>
    {/if}
</div>