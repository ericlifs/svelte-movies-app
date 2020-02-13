<script>
    import SectionTitle from '@svelte-movies-app/ui-kit/SectionTitle.svelte';

    export let sectionTitle;
</script>

<style>
    .grid-wrapper {
        display: flex;
        padding: 0 10%;
        margin: 60px 0;
        flex-direction: column;
    }

    .grid-wrapper__grid {
        display: grid;
        grid-gap: 40px;
        margin-top: 40px;
        grid-template-columns: repeat(5, 1fr);
    }
</style>

<div class="grid-wrapper">
    {#if sectionTitle}
        <SectionTitle title={sectionTitle} underlined />
    {/if}
    <div class="grid-wrapper__grid">
        <slot />
    </div>
</div>
