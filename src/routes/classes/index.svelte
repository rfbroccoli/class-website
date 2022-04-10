<script>
	import LinkList from '$lib/components/link_list.svelte';

	const links = [
		{
			text: 'b13 - learn to code',
			href: 'classes/b13'
		}
	];
</script>

<svelte:head>
	<title>Class</title>
</svelte:head>

<div class="max-w-3xl mx-auto text-center min-h-[70vh]">
	<h1 class="text-3xl font-medium lowercase mt-20">
		Welcome to
		<span class="text-red-400">Classes</span>
	</h1>

	<LinkList {links} />
</div>
