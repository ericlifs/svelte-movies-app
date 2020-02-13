<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
        background: black;
        height: 60px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
    }

    .logo {
        color: white;
        font-size: 2rem;
        text-transform: uppercase;
    }

    .github {
        color: white;
        display: flex;
        align-items: center;
    }

    .github img {
        margin-left: 10px;
    }
</style>

<header class="header">
    <div class="logo">Sapper movie app</div>
    <a class="github" href="https://github.com/ericlifs/svelte-movies-app" target="_blank">
        Made by @ericlifs
        <img src="images/github.png" alt="github"/>
    </a>
</header>