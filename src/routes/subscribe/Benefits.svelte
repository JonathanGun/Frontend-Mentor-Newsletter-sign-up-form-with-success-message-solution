<script lang="ts">
	import listIcon from '$lib/images/icon-list.svg';
	import List from '@/common/List.svelte';

	const benefitTexts: string[] = [
		'Product discovery and building what matters',
		'Measuring to ensure updates are a success',
		'And much more!'
	];
</script>

<ul id="benefits-checklist" class="flex flex-col space-y-2">
	{#each benefitTexts as text}
		<List iconSrc={listIcon} content={text} />
	{/each}
</ul>
