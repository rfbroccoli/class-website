<script>
	export let links = [{ text: 'text', href: 'href' }];
</script>

<div class="flex flex-col gap-5 my-20 items-center">
	{#each links as link}
		<a href={link.href} class="btn bg-red-400 text-white border-0">{link.text}</a>
	{/each}
</div>
