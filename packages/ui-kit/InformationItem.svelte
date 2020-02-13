<script>
    export let title;
    export let value;
</script>

<style>
    .information-item {
        display: flex;
        overflow: hidden;
        flex-direction: column;
    }

    .information-item__value {
        margin: 0;
        overflow: hidden;
        font-size: 1.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

<div class="information-item">
    <label>{title}</label>
    <h2 class="information-item__value">{value}</h2>
</div>