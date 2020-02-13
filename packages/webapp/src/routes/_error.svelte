<script>
	export let status;
	export let error;
</script>

<style lang="scss">
	.error-wrapper {
		padding: 10%;
		display: flex;
		flex-direction: column;
		height: 100vh;
		box-sizing: border-box;
		align-items: center;

		img {
			max-height: 50vh;
			padding-top: 60px;
		}

		h1 {
			text-transform: lowercase;
			font-size: 6em;
			font-weight: 700;
			margin-top: 5rem;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<section class="error-wrapper">
	<img src="images/404.svg" alt="404"/>
	<h1>{status} - {error.message}</h1>
</section>

