<script lang="ts">
	import { form, field } from 'svelte-forms';
	import { email } from 'svelte-forms/validators';

	export let emailAddress: string;

	const emailField = field('email', '', [email()]);
	const subscribeForm = form(emailField);
</script>

<div class="flex flex-col space-y-5 py-5">
	<div>
		<p class="text-xs mb-1 font-bold">Email address</p>
		<input
			class="p-3 w-full border-2 rounded-lg"
			placeholder="email@company.com"
			type="text"
			bind:value={$emailField.value}
		/>
	</div>
	<button
		type="button"
		class="bg-blue-950 rounded p-3 disabled:opacity-50 disabled:bg-gray-600"
		on:click={() => {
			emailAddress = $emailField.value;
		}}
		disabled={!$subscribeForm.valid}
	>
		<p class="text-center text-gray-200 text-sm font-bold">Subscribe to monthly newsletter</p>
	</button>
</div>
