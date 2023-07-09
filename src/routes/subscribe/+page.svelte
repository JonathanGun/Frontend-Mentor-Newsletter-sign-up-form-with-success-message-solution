<script>
	import Success from './Success.svelte';
	import Page from './Page.svelte';

	let formSubmitted = false;
	let emailAddress
</script>

<svelte:head>
	<title>Frontend Mentor | Newsletter sign-up form with success message</title>
	<meta
		name="description"
		content="Frontend Mentor | Newsletter sign-up form with success message"
	/>
</svelte:head>

<section>
	{#if formSubmitted}
		<Success />
	{:else}
		<Page/>
	{/if}
</section>
