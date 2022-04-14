<script context="module">
	export async function load({ fetch, params }) {
		// const { fetch } = ctx;
		const { batch } = params;
		const res = await fetch(`/api/students/${batch}`);
		const students = await res.json();
		return {
			props: {
				students,
				batch
			}
		};
	}
</script>

<script>
	import StudentCard from '$lib/components/student_card.svelte';
	export let students;
	export let batch;
</script>

<svelte:head>
	<title>{batch}</title>
</svelte:head>

<div class="max-w-3xl mx-auto text-center min-h-[70vh]">
	<h1 class="text-3xl font-medium lowercase mt-20">
		Welcome to
		<span class="text-red-400">{batch} - learn to code</span>
	</h1>

	<div class="grid grid-cols-2 gap-10 my-20">
		{#each students as student}
			<!-- <p>{student.first_name}</p> -->
			<StudentCard {student} />
		{/each}
	</div>
</div>
