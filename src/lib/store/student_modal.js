import { writable } from "svelte/store";

export const studentForm = writable({
    _id: '',
    first_name: '',
    last_name: '',
    student_id: '',
    github_account: '',
    reason_for_joining: ''
})