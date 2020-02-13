<script>
    export let text;
    export let light = false;
</script>

<style>
    .button {
        height: 40px;
        display: flex;
        padding: 0 30px;
        cursor: pointer;
        border-radius: 20px;
        align-items: center;
        justify-content: center;
        color: white;
        background: black;
    }

    .light {
        color: black;
        background: white;
    }
</style>

<div class="button" class:light={light} on:click>
    <span class="button__text">{text}</span>
</div>