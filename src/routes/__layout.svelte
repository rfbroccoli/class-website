<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	import '../app.css';
	
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<Navbar />
<slot />
<Footer />
