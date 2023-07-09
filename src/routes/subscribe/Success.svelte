<script lang="ts">
	import iconSuccess from '$lib/images/icon-success.svg';
	export let emailAddress: string;
</script>

<div class="flex flex-col p-5 sm:p-12 pt-24 sm:pt-5 max-w-sm h-[90vh] sm:h-fit space-y-5">
	<img src={iconSuccess} alt="success icon" class="w-12" />
	<h1 class="text-left">Thanks for subscribing!</h1>
	<p class="break-words text-justify grow">
		A confirmation email has been sent to <b>{emailAddress}</b>. Please open it and click the button
		inside to confirm your subscription.
	</p>
	<a href="../" class="bg-blue-950 rounded text-center text-gray-200 text-sm font-bold w-full p-3">
		Dismiss message
	</a>
</div>
