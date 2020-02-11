<script>
    export let text;
    export let light = false;
</script>

<style>
    .button {
        height: 40px;
        display: flex;
        border-radius: 20px;
        align-items: center;
        justify-content: center;
    }

    .light {
        color: black;
        background: white;
    }
</style>

<div class="button" class:light={light} on:click>
    <span class="button__text">{text}</span>
</div>