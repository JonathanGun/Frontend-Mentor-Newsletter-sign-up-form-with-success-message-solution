<script lang="ts">
	import desktopBanner from '$lib/images/illustration-sign-up-desktop.svg';
	import mobileBanner from '$lib/images/illustration-sign-up-mobile.svg';
	import listIcon from '$lib/images/icon-list.svg';

	import Form from './Form.svelte';
	import List from '@/common/List.svelte';

	const benefitTexts: string[] = [
		'Product discovery and building what matters',
		'Measuring to ensure updates are a success',
		'And much more!'
	];

	export let emailAddress: string;
</script>

<div class="flex flex-col sm:flex-row-reverse sm:items-center">
	<picture id="banner-img">
		<source class="hidden sm:block" media="(min-width:650px)" srcset={desktopBanner} />
		<img src={mobileBanner} alt="Sign Up Banner" class="w-full sm:w-fit sm:max-w-xs" />
	</picture>
	<div id="content" class="flex flex-col space-y-3 p-10 max-w-md">
		<h1 class="text-left py-2">Stay Updated!</h1>
		<p>Join 60,000+ product managers receiving monthly updates on:</p>
		<ul id="benefits-checklist" class="flex flex-col space-y-2">
			{#each benefitTexts as text}
				<List iconSrc={listIcon} content={text} />
			{/each}
		</ul>
		<Form bind:emailAddress />
	</div>
</div>
