<script>
	export let student = {
		first_name: '',
		last_name: '',
		student_id: '',
		reason_for_joining: ''
	};
</script>

<div class="card w-96 bg-slate-200 text-black shadow-xl">
	<div class="card-body">
		<div class="flex flex-row gap-5">
			<div class="avatar placeholder">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 font-medium">
					<span>{student.first_name.slice(0, 1)}</span>
				</div>
			</div>

			<h2 class="card-title">{student.first_name || "Anonymous"} {student.last_name || ""}</h2>
		</div>

		<p>{student.reason_for_joining || "haven't added yet"}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-secondary btn-sm">Edit</button>
		</div>
	</div>
</div>
