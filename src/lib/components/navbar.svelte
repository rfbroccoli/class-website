<script>
import ToggleTheme from "./toggle_theme.svelte";

</script>
<div class="navbar bg-base-100 md:px-10">
  <div class="flex-1">
    <a class="font-semibold normal-case text-xl text-red-400" href="/">runfree broccoli</a>
  </div>
  <ToggleTheme />
</div>


<!-- <div class="flex-none gap-2">
  <div class="form-control">
    <input type="text" placeholder="Search" class="input input-bordered">
  </div>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img src="https://api.lorem.space/image/face?hash=33791" />
      </div>
    </label>
    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a class="justify-between">
          Profile
          <span class="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</div> -->