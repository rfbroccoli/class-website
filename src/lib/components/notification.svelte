<script>
	import { notification } from '$lib/store/student_modal';

	notification.subscribe((val) => {
		if (val.message) {
			setTimeout(() => {
				notification.set({
					type: '',
					message: ''
				});
			}, 3000);
		}
	});
</script>

{#if $notification.message}
	<div class={`alert alert-${$notification.type} shadow-lg max-w-md mx-auto`}>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>{$notification.message}</span>
		</div>
	</div>
{/if}
