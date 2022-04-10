<script context="module">
	export async function load(ctx) {
		const { fetch } = ctx;
		const res = await fetch('/api/students');
		const students = await res.json();
		return {
			props: {
				students
			}
		};
	}
</script>

<script>
	export let students;
</script>

<div class="max-w-3xl mx-auto text-center min-h-[70vh]">
	<h1 class="text-3xl font-medium lowercase mt-20">
		Welcome to
		<span class="text-red-400">b13 - learn to code</span>
	</h1>

    {#each students as student}
        <p>{student.first_name}</p>
    {/each}
</div>
