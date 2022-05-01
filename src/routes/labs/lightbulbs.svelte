<script>
	import { numLightBulbs, lightBulbs } from '$lib/store/lightbulb';
	import { prevent_default } from 'svelte/internal';
	let number = 0;
	let ascii = "";
	let binary = "";
	numLightBulbs.subscribe((val) => {
		const arr = Array.from({ length: val }, (v) => false);
		lightBulbs.set(arr);
	});

	function onClick(i) {
		const arr = [...$lightBulbs];
		arr[i] = !arr[i];
		lightBulbs.set(arr);
	}

	lightBulbs.subscribe((val) => {
		binary = val.map((v) => (v ? 1 : 0)).join(' ');
		number = val.reduce(
			(preVal, curVal, curIdx) => {
				if (curVal) {
					return preVal + 2 ** (val.length - curIdx - 1);
				}
				return preVal;
			},

			0
		);
        ascii = String.fromCharCode(number)
	});
</script>

<svelte:head>
	<title>lightbulbs</title>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
		integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<div class="max-w-3xl mx-auto text-center min-h-[70vh]">
	<div class="overflow-x-auto">
		<table class="table w-full">
			<tbody>
				<tr>
					<th>ASCII</th>
					<td>{ascii}</td>
				</tr>

				<tr>
					<th>Number</th>
					<td>{number}</td>
				</tr>

				<tr>
					<th>Binary</th>
					<td>{binary}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<input
		type="number"
		placeholder="Number of LightBulbs"
		class="input input-bordered input-secondary w-2xs text-center"
		bind:value={$numLightBulbs}
	/>
	<div class="grid grid-cols-8 my-20 gap-10">
		{#each $lightBulbs as lightbulb, i}
			<button on:click={() => onClick(i)}>
				{#if lightbulb}
					<i class="fa-solid fa-lightbulb text-8xl text-yellow-300" />
				{:else}
					<i class="fa-solid fa-lightbulb text-8xl" />
				{/if}
				<h1>{$numLightBulbs - i}</h1>
			</button>
		{/each}
	</div>
</div>
