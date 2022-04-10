<script>
	import LinkList from '$lib/components/link_list.svelte';
	const links = [
		{
			text: 'classes',
			href: '/classes'
		},
		{
			text: 'labs',
			href: '/labs'
		},
		{
			text: 'projects',
			href: '/projects'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="max-w-3xl mx-auto text-center min-h-[70vh]">
	<h1 class="text-3xl font-medium lowercase mt-20">
		Welcome to
		<span class="text-red-400">runfree broccoli</span>
	</h1>
	<LinkList {links} />
</div>
