<script lang="ts">
	import Success from './Success.svelte';
	import Page from './Page.svelte';

	let emailAddress: string = '';
</script>

<svelte:head>
	<title>Frontend Mentor | Newsletter sign-up form with success message</title>
	<meta
		name="description"
		content="Frontend Mentor | Newsletter sign-up form with success message"
	/>
</svelte:head>

<section class="rounded-b-xl bg-white p-0 sm:p-3 sm:rounded-3xl">
	{#if emailAddress}
		<Success {emailAddress} />
	{:else}
		<Page bind:emailAddress />
	{/if}
</section>
