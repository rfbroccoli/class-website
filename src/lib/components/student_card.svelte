<script>
	import { studentForm } from '$lib/store/student_modal';

	import StudentModal from './student_modal.svelte';

	export let student = {
		first_name: '',
		last_name: '',
		student_id: '',
		github_account: '',
		reason_for_joining: ''
	};

	function onClick() {
		// console.log(student);
		studentForm.set(student);
	}
</script>

<div class="card w-96 bg-slate-200 text-black shadow-xl">
	<div class="card-body">
		<div class="flex flex-row gap-5">
			<div class="avatar placeholder">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 font-medium">
					<span>{student.first_name.slice(0, 1)}</span>
				</div>
			</div>
			<div class="text-left">
				<h2 class="card-title">{student.first_name || 'Anonymous'} {student.last_name || ''}</h2>
				<p>
					{#if student.github_account}
						<a
							href={`https://github.com/${student.github_account}`}
							class="text-blue-400 text-sm hover:text-black">{student.github_account}</a
						>
					{:else}
						<span class="text-sm text-gray-400">haven't added yet</span>
					{/if}
					<span class="text-sm font-thin">ID: {student.student_id}</span>
				</p>
			</div>
		</div>

		<p class={student.reason_for_joining ? '' : 'text-gray-400'}>
			{student.reason_for_joining || "haven't added yet"}
		</p>
		<div class="card-actions justify-end">
			<label for="student-modal" class="btn btn-sm btn-secondary modal-button" on:click={onClick}
				>Edit</label
			>
		</div>
	</div>
</div>

<!-- The button to open modal -->
