<script>
	import { notification, studentForm } from '$lib/store/student_modal';
	import { onDestroy } from 'svelte';
	export let batch;
	let student = {
		first_name: '',
		last_name: '',
		student_id: '',
		github_account: '',
		reason_for_joining: ''
	};
	let secret_id = '';
	studentForm.subscribe((val) => {
		student = val;
	});
	async function onSubmit() {
		// console.log('modal', student);
		const { first_name, last_name, github_account, reason_for_joining } = student;
		const res = await fetch(`/api/students/${batch}/${secret_id}`, {
			credentials: 'same-origin',
			method: 'PUT',
			body: JSON.stringify({ first_name, last_name, github_account, reason_for_joining })
		});
		if (res.status === 201) {
			notification.set({
				type: 'success',
				message: 'edited successfully!'
			});
			setTimeout(() => {
				location.href = `/classes/${batch}/#${student.student_id}`;
			}, 4000);
			return;
		}
		notification.set({
			type: 'error',
			message: 'incorrect secret id!'
		});
		console.log($notification);
		// alert('');

		// const data = await res.json();
		// // console.log(data);
		// console.log(res.status);
	}

	onDestroy(() => {
		notification.set({
			type: '',
			message: ''
		});
	});
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="student-modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box">
		<label for="student-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<form on:submit={onSubmit}>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="first_name">
					<span class="label-text">First Name</span>
				</label>
				<input
					type="text"
					placeholder="First Name"
					class="input input-bordered w-full max-w-xs"
					id="first_name"
					bind:value={student.first_name}
				/>
				<label class="label" for="last_name">
					<span class="label-text">Last Name</span>
				</label>
				<input
					type="text"
					placeholder="Last Name"
					class="input input-bordered w-full max-w-xs"
					id="last_name"
					bind:value={student.last_name}
				/>
				<label class="label" for="github_account">
					<span class="label-text">Github Username</span>
				</label>
				<input
					type="text"
					placeholder="Github Username"
					class="input input-bordered w-full max-w-xs"
					id="github_account"
					bind:value={student.github_account}
				/>
				<label class="label" for="reason_for_joining">
					<span class="label-text">Reason For Joining</span>
				</label>
				<input
					type="text"
					placeholder="Reason For Joining"
					class="input input-bordered w-full max-w-xs"
					id="reason_for_joining"
					bind:value={student.reason_for_joining}
				/>
				<label class="label" for="secret_id">
					<span class="label-text">Secret ID</span>
				</label>
				<input
					type="text"
					placeholder="Secret ID"
					class="input input-bordered w-full max-w-xs"
					id="secret_id"
					bind:value={secret_id}
				/>
			</div>
		</form>
		<div class="modal-action">
			{#if secret_id.length === 24}
				<label for="student-modal" on:click={onSubmit} class="btn btn-sm">Submit</label>
			{:else}
				<label for="student-modal" disabled class="btn btn-sm">Submit</label>
			{/if}
		</div>
	</div>
</div>
